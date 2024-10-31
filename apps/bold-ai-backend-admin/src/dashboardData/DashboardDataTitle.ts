import { DashboardData as TDashboardData } from "../api/dashboardData/DashboardData";

export const DASHBOARDDATA_TITLE_FIELD = "id";

export const DashboardDataTitle = (record: TDashboardData): string => {
  return record.id?.toString() || String(record.id);
};
