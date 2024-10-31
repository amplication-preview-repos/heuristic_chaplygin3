import { AiAgent as TAiAgent } from "../api/aiAgent/AiAgent";

export const AIAGENT_TITLE_FIELD = "aiType";

export const AiAgentTitle = (record: TAiAgent): string => {
  return record.aiType?.toString() || String(record.id);
};
