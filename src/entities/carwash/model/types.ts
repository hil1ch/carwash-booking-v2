import type { Service } from "../../service";
import type { CarwashReview } from "../../review";

export type WorkingDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type CarwashLocation = {
  city: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type CarwashBreak = {
  start: string;
  end: string;
};

export type Carwash = {
  id: number;
  ownerId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isFavorite: boolean;
  services: Service[];
  location: CarwashLocation;
  phone: string;
  email: string;
  workingDays: WorkingDay[];
  openingTime: string;
  closingTime: string;
  breaks: CarwashBreak[];
  reviews: CarwashReview[];
};

export type CreateCarwashData = {
  id: number;
  ownerId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  location: CarwashLocation;
  phone: string;
  email: string;
  workingDays: WorkingDay[];
  openingTime: string;
  closingTime: string;
  breaks: CarwashBreak[];
};

export type UpdateCarwashData = {
  name: string;
  description: string;
  price: number;
  image: string;
  location: CarwashLocation;
  phone: string;
  email: string;
  workingDays: WorkingDay[];
  openingTime: string;
  closingTime: string;
  breaks: CarwashBreak[];
};
