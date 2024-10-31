import { MarketplaceEntryWhereInput } from "./MarketplaceEntryWhereInput";
import { MarketplaceEntryOrderByInput } from "./MarketplaceEntryOrderByInput";

export type MarketplaceEntryFindManyArgs = {
  where?: MarketplaceEntryWhereInput;
  orderBy?: Array<MarketplaceEntryOrderByInput>;
  skip?: number;
  take?: number;
};
