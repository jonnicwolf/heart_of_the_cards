import { OpenAI } from 'openai';
import { config } from 'dotenv';
config();

async function run() {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    let attempts = 0;
    const maxAttempts = 5;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    while (attempts < maxAttempts) {
      try {
        const chatCompletion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: 'user', content: 'hello world' }],
        });

        console.log(chatCompletion.choices[0].message.content);
        break;
      } catch (error) {
        if (error instanceof OpenAI.APIError && error.status === 429) {
          const retryAfter = error.response?.headers?.get('Retry-After');
          const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : Math.pow(2, attempts) * 1000;
          console.error(`Rate-limited. Retrying after ${waitTime / 1000} seconds...`);
          await delay(waitTime);
          attempts++;
        } else {
          throw error;
        };
      };
    };

    if (attempts === maxAttempts) {
      console.error('Max retry attempts reached. Exiting...');
    };
  } catch (error) {
    console.error('Unexpected error:', error);
  };
};

run();