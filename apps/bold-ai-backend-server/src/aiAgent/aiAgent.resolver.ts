import * as graphql from "@nestjs/graphql";
import { AiAgentResolverBase } from "./base/aiAgent.resolver.base";
import { AiAgent } from "./base/AiAgent";
import { AiAgentService } from "./aiAgent.service";

@graphql.Resolver(() => AiAgent)
export class AiAgentResolver extends AiAgentResolverBase {
  constructor(protected readonly service: AiAgentService) {
    super(service);
  }
}
