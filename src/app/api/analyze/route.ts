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
        'HTTP-Referer': 'https://github.com/weimingxu/poker_assistant', // 你的应用URL
        'X-Title': 'Poker Assistant', // 你的应用名称
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro-exp-03-25:free',
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const completion = await response.json();
    const analysisResult = completion.choices[0].message.content;
    return NextResponse.json({ result: analysisResult });

  } catch (error) {
    logger.error("Error calling OpenRouter API:", error);
    return NextResponse.json({ error: "Error analyzing hand" }, { status: 500 });
  }
}