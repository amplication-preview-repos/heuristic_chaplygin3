import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  businessType?: SortOrder;
  connectedAccountDetails?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
