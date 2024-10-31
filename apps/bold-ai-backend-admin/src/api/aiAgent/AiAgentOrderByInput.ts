import { SortOrder } from "../../util/SortOrder";

export type AiAgentOrderByInput = {
  aiType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  interaction?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
