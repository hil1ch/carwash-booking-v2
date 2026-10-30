export type CarwashReview = {
  id: string;
  name?: string;
  image?: string;
  rating: number;
  text: string;
  user: string; // После реализации авторизации заменить на type User
};