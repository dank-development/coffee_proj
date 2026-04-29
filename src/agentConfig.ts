import { OpenRouter } from "@openrouter/sdk";

type LlmModel = "minimax/minimax-m2.5:free" | "openrouter/free";

export const model: LlmModel = "openrouter/free";

export const agentName: string = "Frank";

export const openrouter = new OpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API,
});

export const tools = [
  {
    type: "function" as const,
    function: {
      name: "getDrinks",
      description:
        "Retrieves the list of available drink variations, including drink name, description, size, cup size, whether it's hot or cold, sweetness, intensity and popularity. Use this when the user wants recommendations or to see what is available.",
      parameters: {
        type: "object",
        properties: {}, // No input parameters needed for this simple example
        required: [],
      },
    },
  },
];

export const systemPrompt: string = `
You are '${agentName}', a highly knowledgeable coffee sommelier.
Your goal is to help the user find their perfect coffee.
1. Greet the user warmly.
2. Ask about their taste preferences (e.g., fruity, nutty, dark roast).
3. If you don't know what coffees you have, use the 'getDrinks' tool to look them up before recommending.
4. Be concise and enthusiastic.
`;

// const systemPrompt = `
// You are BaristaBot, a helpful coffee recommender.
// Your job is to recommend drinks based on the user's taste, strength, sweetness, milk preference, temperature, and caffeine needs.

// Rules:
// - Be concise and friendly.
// - If the user asks for a recommendation, check the available drinks with the getDrinks tool before recommending.
// - Only recommend drinks that exist in the tool output.
// - If the user is vague, ask 1 short follow-up question.
// `;
