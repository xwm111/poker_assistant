
import { OpenAPI } from "./app/api";

const openai = new OpenAI({
    apiKey: "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",
});


const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "现在是德州扑克比赛早期阶段，我的位置是utg,筹码数量 60bb,我拿到了♥️A红心 7，我该如何行动才符合gto，你的回答只能加注或者弃牌，当我再问你给出解释的时候，你再给我解释" }],
    model: "gpt-3.5-turbo",
});
console.log("receive from gpt")
console.log(chatCompletion.choices[0].message.content);
