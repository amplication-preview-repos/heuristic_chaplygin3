import { InputJsonValue } from "../../types";

export type AiAgentUpdateInput = {
  aiType?: string | null;
  interaction?: InputJsonValue;
  role?: string | null;
};
