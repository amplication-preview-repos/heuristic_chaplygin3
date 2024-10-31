import { InputJsonValue } from "../../types";

export type DashboardDataUpdateInput = {
  campaignPerformanceData?: InputJsonValue;
  generatedInsights?: string | null;
  optimizationRecommendations?: string | null;
};
