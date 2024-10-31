import { DashboardDataWhereInput } from "./DashboardDataWhereInput";
import { DashboardDataOrderByInput } from "./DashboardDataOrderByInput";

export type DashboardDataFindManyArgs = {
  where?: DashboardDataWhereInput;
  orderBy?: Array<DashboardDataOrderByInput>;
  skip?: number;
  take?: number;
};
