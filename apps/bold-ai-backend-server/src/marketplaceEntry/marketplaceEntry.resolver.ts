import * as graphql from "@nestjs/graphql";
import { MarketplaceEntryResolverBase } from "./base/marketplaceEntry.resolver.base";
import { MarketplaceEntry } from "./base/MarketplaceEntry";
import { MarketplaceEntryService } from "./marketplaceEntry.service";

@graphql.Resolver(() => MarketplaceEntry)
export class MarketplaceEntryResolver extends MarketplaceEntryResolverBase {
  constructor(protected readonly service: MarketplaceEntryService) {
    super(service);
  }
}
