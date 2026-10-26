import type { Service } from "../../service";
import type { CarwashReview } from "../../review";

export type Carwash = {
  id: number;
  name: string;
  price: number;
  image: string;
  isFavorite: boolean;
  services: Service[];
  location: string;
  reviews: CarwashReview[];
};
