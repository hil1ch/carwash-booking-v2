export type ServiceCategory =
  | "body"
  | "salon"
  | "complex"
  | "polishing"
  | "protection"
  | "engine";

export type Service = {
  id: number;
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
  durationMinutes: number;
  isActive: boolean;
};