import { SortOrder } from "../../util/SortOrder";

export type MarketplaceEntryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  rating?: SortOrder;
  serviceType?: SortOrder;
  updatedAt?: SortOrder;
};
