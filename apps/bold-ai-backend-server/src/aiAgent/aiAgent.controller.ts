import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiAgentService } from "./aiAgent.service";
import { AiAgentControllerBase } from "./base/aiAgent.controller.base";

@swagger.ApiTags("aiAgents")
@common.Controller("aiAgents")
export class AiAgentController extends AiAgentControllerBase {
  constructor(protected readonly service: AiAgentService) {
    super(service);
  }
}
