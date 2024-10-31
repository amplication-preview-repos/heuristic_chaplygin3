import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MarketplaceEntryWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  rating?: IntNullableFilter;
  serviceType?: "Option1";
};
