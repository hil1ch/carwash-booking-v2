export type Carwash = {
  id: number;
  name: string;
  price: number;
  image: string;
  isFavorite: boolean;
  services: string[];
  location: string;
  reviews: CarwashReview[];
};

type CarwashReview = {
  rating: number;
  text: string;
};
