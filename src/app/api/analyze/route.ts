import { NextResponse } from 'next/server';
import logger from '@/libs/logger';

interface PlayerStack {
  position: number;
  stack: number;
}

interface RequestData {
  hand: string;
  board: string;
  position: number;
  actions: string;
  playerStacks: PlayerStack[];
  street: string;
  playerCount: number;
  playStyle: 'LAG' | 'TAG';
}

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function POST(request: Request) {
  logger.info("POST /api/analyze called");

  try {
    const requestData = await request.json() as RequestData;
    const { hand, board, position, actions, playerStacks, street, playerCount, playStyle } = requestData;

    // 格式化玩家筹码信息
    const stacksInfo = playerStacks
      .map(stack => `位置${stack.position}的筹码: ${stack.stack}`)
      .join(', ');

    // 根据玩家风格选择prompt
    const stylePrompts = {
      LAG: '你是一名职业德州扑克牌手，拥有多年的实战经验，打法风格是松凶（Loose Aggressive, LAG），以激进的行动和高频率的参与牌局著称。你擅长通过广泛的手牌范围（包括强牌和投机性手牌）施加压力，并在有利位置或读牌准确时最大化收益。你是一个盈利型玩家，长期在现金桌或锦标赛中保持正收益，熟悉数学期望、位置优势、对手倾向和心理博弈。',
      TAG: '你是一名职业德州扑克牌手，拥有丰富的实战经验，打法风格是紧凶（Tight Aggressive, TAG），以严格的手牌选择和激进的下注策略著称。你只在有利位置或手牌强度较高时参与牌局，擅长利用位置优势、对手的弱点和数学计算来最大化收益。你是一个盈利型玩家，长期在现金桌或锦标赛中保持正收益，精通牌局数学、范围分析和对手行为解读。'
    } as const;

    // 构建更详细的prompt
    const prompt = `
${stylePrompts[playStyle]}

请分析这手德州扑克牌局，并使用markdown格式输出分析结果:

## 牌局信息

- 玩家手牌: ${hand || '未知'}
- 公共牌: ${board || '无'}
- 当前位置: ${position}
- 当前回合: ${street}
- 牌桌人数: ${playerCount}人桌

## 玩家筹码情况

${stacksInfo}

## 行动记录

${actions}

## 详细分析

### 1. 对手手牌范围分析

请分析对手可能持有的手牌范围。

### 2. 对手策略分析

根据当前的筹码深度和行动记录，分析对手可能的策略。

### 3. 行动建议

给出最优的行动建议，并解释原因。

### 4. 加注尺度

如果建议加注，给出合适的加注尺度。

## 总结

### 对手最可能持有的手牌
1. 
2. 
3. 
4. 
5. 

### 建议行动
- 行动类型：（弃牌/跟注/加注/全下）
- 加注金额：（如果建议加注）
- 胜率预估：（高/中/低）

请确保回答使用以上markdown格式，保持清晰的标题层级和列表格式。`;

    logger.info("Generated prompt:", prompt);

    // 创建一个 TransformStream 用于处理流式响应
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    // 发送请求到 OpenRouter API
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://github.com/weimingxu/poker_assistant',
        'X-Title': 'Poker Assistant',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro-exp-03-25:free',
        messages: [{ role: "user", content: prompt }],
        stream: true
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    // 确保响应是可读流
    if (!response.body) {
      throw new Error('No response body');
    }

    // 创建响应的读取器
    const reader = response.body.getReader();

    // 处理流式响应
    (async () => {
      try {
        let fullResponse = '';  // 用于收集完整的响应
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            logger.debug("完整的分析响应:", fullResponse);  // 输出完整响应
            await writer.close();
            break;
          }

          // 解析响应数据
          const text = new TextDecoder().decode(value);
          const lines = text.split('\n').filter(line => line.trim() !== '');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;

              try {
                // 尝试解析JSON
                let content = '';
                try {
                  const parsed = JSON.parse(data);
                  content = parsed.choices?.[0]?.delta?.content || 
                           parsed.choices?.[0]?.content ||
                           parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
                } catch (jsonError) {
                  logger.error('JSON解析失败:', jsonError);
                  // 如果JSON解析失败，直接使用文本内容
                  content = data;
                  logger.debug("使用原始文本内容:", content);
                }
                
                if (content) {
                  fullResponse += content;  // 累积响应内容
                  await writer.write(encoder.encode(content));
                }
              } catch (e) {
                logger.error('处理响应数据时出错:', e);
              }
            }
          }
        }
      } catch (error) {
        console.error('Error reading stream:', error);
        logger.error('流读取错误:', error);
        await writer.abort(error);
      }
    })();

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });

  } catch (error) {
    logger.error("Error calling OpenRouter API:", error);
    return NextResponse.json({ error: "Error analyzing hand" }, { status: 500 });
  }
}