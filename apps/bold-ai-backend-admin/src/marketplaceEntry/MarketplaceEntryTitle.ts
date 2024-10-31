import { MarketplaceEntry as TMarketplaceEntry } from "../api/marketplaceEntry/MarketplaceEntry";

export const MARKETPLACEENTRY_TITLE_FIELD = "id";

export const MarketplaceEntryTitle = (record: TMarketplaceEntry): string => {
  return record.id?.toString() || String(record.id);
};
