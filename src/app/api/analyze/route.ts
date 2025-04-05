import { NextResponse } from 'next/server';
import logger from '@/libs/logger';

interface PlayerStack {
  position: number;
  stack: number;
}

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function POST(request: Request) {
  logger.debug("POST /api/analyze called");

  try {
    const requestData = await request.json();
    const { hand, board, position, actions, playerStacks, street, playerCount } = requestData;

    // 格式化玩家筹码信息
    const stacksInfo = (playerStacks as PlayerStack[])
      .map(stack => `位置${stack.position}的筹码: ${stack.stack}`)
      .join(', ');

    // 构建更详细的prompt
    const prompt = `
你是一名职业德州扑克牌手，拥有多年的实战经验，打法风格是松凶（Loose Aggressive, LAG），以激进的行动和高频率的参与牌局著称。你擅长通过广泛的手牌范围（包括强牌和投机性手牌）施加压力，并在有利位置或读牌准确时最大化收益。你是一个盈利型玩家，长期在现金桌或锦标赛中保持正收益，熟悉数学期望、位置优势、对手倾向和心理博弈。

分析这手德州扑克牌局:

基本信息:
- 玩家手牌: ${hand || '未知'}
- 公共牌: ${board || '无'}
- 当前位置: ${position}
- 当前回合: ${street}
- 牌桌人数: ${playerCount}人桌

玩家筹码情况:
${stacksInfo}

行动记录:
${actions}

请分析当前局面并给出建议:
1. 分析对手的手牌范围
2. 根据当前的筹码深度和行动记录，分析对手可能的策略
3. 给出最优的行动建议，并解释原因
4. 如果建议加注，给出合适的加注尺度

最后请总结以下信息：
1. 对手最有可能持有的前5个具体手牌组合
2. 建议的行动（弃牌/跟注/加注/全下）
3. 如果建议加注，具体加注多少
4. 胜率预估（高/中/低）
`;

    logger.debug("Generated prompt:", prompt);

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
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const completion = await response.json();
    logger.debug("API Response:", completion);

    // Gemini模型的响应格式与其他模型不同，需要适配
    const analysisResult = completion.choices?.[0]?.message?.content || 
                         completion.choices?.[0]?.content ||
                         completion.candidates?.[0]?.content?.parts?.[0]?.text ||
                         "无法获取分析结果";
                         
    return NextResponse.json({ result: analysisResult });

  } catch (error) {
    logger.error("Error calling OpenRouter API:", error);
    return NextResponse.json({ error: "Error analyzing hand" }, { status: 500 });
  }
}