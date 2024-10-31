import * as graphql from "@nestjs/graphql";
import { DashboardDataResolverBase } from "./base/dashboardData.resolver.base";
import { DashboardData } from "./base/DashboardData";
import { DashboardDataService } from "./dashboardData.service";

@graphql.Resolver(() => DashboardData)
export class DashboardDataResolver extends DashboardDataResolverBase {
  constructor(protected readonly service: DashboardDataService) {
    super(service);
  }
}
