import { useState } from "react";
import { OpenRouter } from "@openrouter/sdk";
import type { ChatMessages } from "@openrouter/sdk/models";
import { tools, systemPrompt, agentName, model } from "../agentConfig";
import { Bot } from "lucide-react";
import { motion } from "motion/react";
import Button from "./Button";

type Props = {
  openRouter: OpenRouter;
};

export default function OpenRouterAgent({ openRouter }: Props) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<ChatMessages[]>([
    {
      role: "system",
      content: systemPrompt,
    },
  ]);

  const queryAgent = async () => {
    const newQuery = query.trim();
    if (!newQuery) return;

    setQuery("");
    setLoading(true);
    setResponse("");
    setError("");

    const userMessage: ChatMessages = {
      role: "user",
      content: newQuery,
    };
    const newHistory = [...history, userMessage];
    setHistory(newHistory);

    try {
      const stream = await openRouter.chat.send({
        chatRequest: {
          model: model,
          messages: newHistory,
          tools: tools,
          toolChoice: "auto",
          stream: true,
        },
      });

      for await (const chunk of stream) {
        if (chunk.error) {
          setError(chunk.error.message);
          break;
        }

        const content = chunk.choices?.[0]?.delta?.content;
        if (content) {
          setResponse((prev) => prev + content);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleQuery = async () => {
    await queryAgent();
    setQuery("");
  };

  return (
    <motion.div
      className="text-primary-foreground bg-primary flex flex-col w-1/2 h-full mx-auto squircle items-center p-4"
      whileHover={{
        backgroundColor: "var(--color-secondary)",
        color: "var(--color-secondary-foreground)",
        border: "2px solid var(--color-highlight)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <h2 className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-3xl">Ask {agentName}</span>
        <Bot size={24} />
      </h2>
      <textarea
        value={query}
        placeholder="idk what i want, recommend me a coffee with oat milk..."
        className="w-full mx-auto h-25 min-h-20 max-h-50 bg-primary squircle px-4 py-2 mb-6"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleQuery} disabled={loading} className="w-full mb-4">
        {loading ? "Thinking..." : "Send"}
      </Button>
      <pre className="max-w-full text-wrap">{response}</pre>
      {error && <p className="text-500-red">{error}</p>}
    </motion.div>
  );
}
