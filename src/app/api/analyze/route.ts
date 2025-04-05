import { NextResponse } from 'next/server';
import logger from '@/libs/logger';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  logger.debug("POST /api/analyze called");

  try {
    const requestData = await request.json();
    const { hand, board, position, actions } = requestData;

    // TODO: Design a better prompt based on user input
    const prompt = `Analyze the poker hand: Hand: ${hand}, Board: ${board}, Position: ${position}, Actions: ${actions}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Or another suitable model
      messages: [{ role: "user", content: prompt }],
    });

    // TODO: Extract relevant analysis results from completion.choices[0].message.content
    const analysisResult = completion.choices[0].message.content;

    return NextResponse.json({ result: analysisResult });

  } catch (error) {
    logger.error("Error calling OpenAI API:", error);
    return NextResponse.json({ error: "Error analyzing hand" }, { status: 500 });
  }
}