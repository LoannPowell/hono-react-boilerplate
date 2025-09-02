import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { Hono } from 'hono';

export const aiRoutes = new Hono().get('/', async (c) => {
  const { text } = await generateText({
    model: openai('o4-mini'),
    prompt: "What's the weather like today?",
  });
  return c.json({ text });
});
