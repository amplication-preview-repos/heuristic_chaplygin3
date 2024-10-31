import { JsonValue } from "type-fest";

export type AiAgent = {
  aiType: string | null;
  createdAt: Date;
  id: string;
  interaction: JsonValue;
  role: string | null;
  updatedAt: Date;
};
