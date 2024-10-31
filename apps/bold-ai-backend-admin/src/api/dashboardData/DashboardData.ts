import { JsonValue } from "type-fest";

export type DashboardData = {
  campaignPerformanceData: JsonValue;
  createdAt: Date;
  generatedInsights: string | null;
  id: string;
  optimizationRecommendations: string | null;
  updatedAt: Date;
};
