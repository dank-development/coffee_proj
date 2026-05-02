import { drinkTypes } from "../data/drinkTypes";
import type { Drink } from "../types/drink";

export const getDrinks = (): Drink[] => drinkTypes;

export const runTool = async (toolName: string) => {
  switch (toolName) {
    case "getDrinks":
      return getDrinks();
    default:
      throw new Error(`Unknown tool: ${toolName}`);
  }
};
