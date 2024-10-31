export type MarketplaceEntry = {
  createdAt: Date;
  id: string;
  price: number | null;
  rating: number | null;
  serviceType?: "Option1" | null;
  updatedAt: Date;
};
