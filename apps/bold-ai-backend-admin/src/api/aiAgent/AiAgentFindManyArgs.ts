import { AiAgentWhereInput } from "./AiAgentWhereInput";
import { AiAgentOrderByInput } from "./AiAgentOrderByInput";

export type AiAgentFindManyArgs = {
  where?: AiAgentWhereInput;
  orderBy?: Array<AiAgentOrderByInput>;
  skip?: number;
  take?: number;
};
