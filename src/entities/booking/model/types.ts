export type BookingStatus = "confirmed" | "pending";

export type Booking = {
  id: string;
  userId: string;
  ownerId: string;
  customer: string;
  phone: string;
  service: string;
  carwashName: string;
  amount: number;
  date: string;
  status: BookingStatus;
};
