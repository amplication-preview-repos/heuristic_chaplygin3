import { InputJsonValue } from "../../types";

export type DashboardDataCreateInput = {
  campaignPerformanceData?: InputJsonValue;
  generatedInsights?: string | null;
  optimizationRecommendations?: string | null;
};
