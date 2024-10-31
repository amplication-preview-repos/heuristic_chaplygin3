import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardDataService } from "./dashboardData.service";
import { DashboardDataControllerBase } from "./base/dashboardData.controller.base";

@swagger.ApiTags("dashboardData")
@common.Controller("dashboardData")
export class DashboardDataController extends DashboardDataControllerBase {
  constructor(protected readonly service: DashboardDataService) {
    super(service);
  }
}
