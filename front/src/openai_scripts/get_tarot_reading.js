import { OpenAI } from 'openai';

export async function get_tarot_reading (question, cards) {
  if (cards && cards.length > 0 && question) {
    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });
  
      let attempts = 0;
      const maxAttempts = 2;
      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  
      while (attempts < maxAttempts) {
        try {
          const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: `Make a three card tarot reading using these cards: ${cards} and this question -> ${question}` }],
          });
          const reading = chatCompletion.choices[0].message.content;
          return reading;
        }
        catch (error) {
          if (error instanceof OpenAI.APIError && error.status === 429) {
            const retryAfter = error.response?.headers?.get('Retry-After');
            const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : Math.pow(2, attempts) * 1000;
  
            console.error(`Rate-limited. Retrying after ${waitTime / 1000} seconds...`);
            await delay(waitTime);
            attempts++;
          }
          else {
            throw error;
          };
        };
      };
  
      if (attempts === maxAttempts) {
        console.error('Max retry attempts reached. Exiting...');
      };
    }
    catch (error) {
      console.error('Unexpected error:', error);
    };
  }
  else {
    throw new Error('Missing card or question data. get_tarot_reading did not run.');
  }
};
