import { OpenAI } from 'openai'

async function run() {
  try {
    const { config } = await import('dotenv');
    config();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: 'hello world' }],
    });

    console.log(chatCompletion.choices[0].message.content);
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status);
      console.error(error.message);
      console.error(error.code);
      console.error(error.type);
    } else {
      console.log(error);
    }
  }
}

run();
