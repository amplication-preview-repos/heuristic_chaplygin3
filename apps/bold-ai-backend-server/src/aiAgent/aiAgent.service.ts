import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiAgentServiceBase } from "./base/aiAgent.service.base";

@Injectable()
export class AiAgentService extends AiAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
