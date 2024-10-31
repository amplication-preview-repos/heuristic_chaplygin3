import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  businessType?: string | null;
  connectedAccountDetails?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
