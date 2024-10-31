import { Module } from "@nestjs/common";
import { AiAgentModuleBase } from "./base/aiAgent.module.base";
import { AiAgentService } from "./aiAgent.service";
import { AiAgentController } from "./aiAgent.controller";
import { AiAgentResolver } from "./aiAgent.resolver";

@Module({
  imports: [AiAgentModuleBase],
  controllers: [AiAgentController],
  providers: [AiAgentService, AiAgentResolver],
  exports: [AiAgentService],
})
export class AiAgentModule {}
