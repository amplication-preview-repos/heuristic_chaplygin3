import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  businessType?: string | null;
  connectedAccountDetails?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
