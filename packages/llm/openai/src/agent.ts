import {
  LLMAgent,
  LLMAgentWorker,
  type LLMAgentParams,
} from "@llamaindex/core/agent";
import { Settings } from "@llamaindex/core/global";
import { OpenAI } from "./llm";

// This is likely not necessary anymore but leaving it here just incase it's in use elsewhere

export type OpenAIAgentParams = LLMAgentParams;

export class OpenAIAgentWorker extends LLMAgentWorker {}

export class OpenAIAgent extends LLMAgent {
  constructor(params: OpenAIAgentParams) {
    const llm =
      params.llm ??
      (Settings.llm instanceof OpenAI
        ? (Settings.llm as OpenAI)
        : new OpenAI());
    super({
      ...params,
      llm,
    });
  }
}