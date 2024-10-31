import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AiAgentWhereInput = {
  aiType?: StringNullableFilter;
  id?: StringFilter;
  interaction?: JsonFilter;
  role?: StringNullableFilter;
};
