import { apiRequest } from "./httpClient";

export type WorkingDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

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

export type CarwashReview = {
  id: string;
  name?: string;
  image?: string;
  rating: number;
  text: string;
  user: string; // После реализации авторизации заменить на type User
  date?: string;
  tags?: string[];
};

export type ICarwashDto = {
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

export type ICreateCarwashDto = {
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

export type IUpdateCarwashDto = {
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

export const getCarwashes = (signal?: AbortSignal): Promise<ICarwashDto[]> =>
  apiRequest<ICarwashDto[]>("/carwashes", { signal });

export const getCarwashById = (
  id: number,
  signal?: AbortSignal,
): Promise<ICarwashDto> =>
  apiRequest<ICarwashDto>(`/carwashes/${id}`, { signal });