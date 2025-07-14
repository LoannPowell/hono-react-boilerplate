import { Hono } from "hono";
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export const aiRoutes = new Hono()

.get('/', async (c) => {
  const { text } = await generateText({
    model: openai("o4-mini"),
    prompt: "What's the weather like today?",
 });
  return c.json({ text });
});