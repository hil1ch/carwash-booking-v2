import type { Service } from "../../service";

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

type CarwashReview = {
  rating: number;
  text: string;
};
