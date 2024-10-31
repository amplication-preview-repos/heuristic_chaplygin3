import { JsonValue } from "type-fest";

export type User = {
  businessType: string | null;
  connectedAccountDetails: JsonValue;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
