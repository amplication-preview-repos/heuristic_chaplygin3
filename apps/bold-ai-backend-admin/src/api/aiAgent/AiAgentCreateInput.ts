import { InputJsonValue } from "../../types";

export type AiAgentCreateInput = {
  aiType?: string | null;
  interaction?: InputJsonValue;
  role?: string | null;
};
