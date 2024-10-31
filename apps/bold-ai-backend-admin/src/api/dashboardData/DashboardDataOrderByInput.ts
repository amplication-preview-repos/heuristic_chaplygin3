import { SortOrder } from "../../util/SortOrder";

export type DashboardDataOrderByInput = {
  campaignPerformanceData?: SortOrder;
  createdAt?: SortOrder;
  generatedInsights?: SortOrder;
  id?: SortOrder;
  optimizationRecommendations?: SortOrder;
  updatedAt?: SortOrder;
};
