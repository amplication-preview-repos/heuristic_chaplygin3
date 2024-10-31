import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketplaceEntryService } from "./marketplaceEntry.service";
import { MarketplaceEntryControllerBase } from "./base/marketplaceEntry.controller.base";

@swagger.ApiTags("marketplaceEntries")
@common.Controller("marketplaceEntries")
export class MarketplaceEntryController extends MarketplaceEntryControllerBase {
  constructor(protected readonly service: MarketplaceEntryService) {
    super(service);
  }
}
