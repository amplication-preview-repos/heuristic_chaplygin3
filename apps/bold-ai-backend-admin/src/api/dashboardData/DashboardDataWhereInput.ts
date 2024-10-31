import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DashboardDataWhereInput = {
  campaignPerformanceData?: JsonFilter;
  generatedInsights?: StringNullableFilter;
  id?: StringFilter;
  optimizationRecommendations?: StringNullableFilter;
};
