import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardDataServiceBase } from "./base/dashboardData.service.base";

@Injectable()
export class DashboardDataService extends DashboardDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
