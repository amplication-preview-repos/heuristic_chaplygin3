import { Module } from "@nestjs/common";
import { DashboardDataModuleBase } from "./base/dashboardData.module.base";
import { DashboardDataService } from "./dashboardData.service";
import { DashboardDataController } from "./dashboardData.controller";
import { DashboardDataResolver } from "./dashboardData.resolver";

@Module({
  imports: [DashboardDataModuleBase],
  controllers: [DashboardDataController],
  providers: [DashboardDataService, DashboardDataResolver],
  exports: [DashboardDataService],
})
export class DashboardDataModule {}
