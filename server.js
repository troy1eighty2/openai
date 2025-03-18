import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })

const completion = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      role: "user",
      content: "what is the maximum amount of tokens you can output in one prompt",
    },
  ],
});

console.log(completion.choices[0].message.content);
