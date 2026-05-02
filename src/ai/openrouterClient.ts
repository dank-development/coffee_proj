import { OpenRouter } from "@openrouter/sdk";
import { OPENROUTER_API_KEY } from "../config";

export const openrouter = new OpenRouter({
  apiKey: OPENROUTER_API_KEY,
});
