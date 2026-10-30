export type BookingStatus = "confirmed" | "pending";

export type Booking = {
  id: string;
  customer: string;
  phone: string;
  service: string;
  date: string;
  status: BookingStatus;
};
