import { NextResponse } from 'next/server';
import logger from '@/libs/logger';
import OpenAI from 'openai';

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

// 创建自定义的 OpenAI 实例
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || '',
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://github.com/weimingxu/poker_assistant',
    'X-Title': 'Poker Assistant',
  },
  defaultQuery: undefined,
  organization: undefined,
});

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

## 筹码情况分析

### 玩家筹码分布
${stacksInfo}

### 筹码深度分析
- 有效筹码深度（Effective Stack）
- 相对位置筹码量对比
- pot odds（底池赔率）分析
- 隐含赔率分析

## 行动记录

${actions}

## 详细分析

### 1. 对手手牌范围分析

请基于对手的位置、筹码量和行动记录分析其可能持有的手牌范围。

### 2. 策略分析

- SPR（底池与筹码比）分析
- 对手的筹码量对其策略的影响
- 当前位置相对于其他玩家的筹码优势/劣势
- 后位玩家的筹码压力分析

### 3. 行动建议

给出最优的行动建议，并从以下几个维度解释原因：
- 手牌强度
- 位置优势
- 筹码优势
- 底池权益
- 风险收益比

### 4. 加注尺度

如果建议加注：
- 建议加注尺度（考虑各位置的有效筹码）
- 最小加注金额
- 最大加注金额
- 目标效果（价值获取/防守底池/施加压力）

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
- 风险等级：（低/中/高）
- 期望收益：（正/负，大/中/小）

请确保回答使用以上markdown格式，保持清晰的标题层级和列表格式。 markdown格式不要用 三个点包裹起来
`;

    logger.info("Generated prompt:", prompt);

    // 创建一个 TransformStream 用于处理流式响应
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    // 使用 OpenAI 组件发送请求
    const response = await openai.chat.completions.create({
      model: 'microsoft/mai-ds-r1:free',
      messages: [{ role: "user", content: prompt }],
      stream: true,
    });

    // 处理流式响应
    (async () => {
      try {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            await writer.write(encoder.encode(content));
          }
        }
        await writer.close();
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
    logger.error("Error calling OpenAI API:", error);
    return NextResponse.json({ error: "Error analyzing hand" }, { status: 500 });
  }
}