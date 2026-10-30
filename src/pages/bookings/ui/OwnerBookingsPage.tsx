import { useState } from "react";
import { UISelect } from "../../../shared/ui/UISelect";
import { SELECT_OPTIONS } from "../model/options";
import { UITab } from "../../../shared/ui/UITab";
import type { TabsProps } from "antd";
import { BookingsTable } from "../../../entities/booking";
import type { Booking, BookingStatus } from "../../../entities/booking";
import { INITIAL_BOOKINGS } from "../../../entities/booking/model/mockBookings";

type BookingFilter = "all" | BookingStatus;

const items: TabsProps["items"] = [
  {
    key: "all",
    label: "Все",
  },
  {
    key: "pending",
    label: "В ожидании",
  },
  {
    key: "confirmed",
    label: "Подтвержденные",
  },
];

export const OwnerBookingsPage = () => {
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [filter, setFilter] = useState<BookingFilter>("all");
  const visibleBookings =
    filter === "all"
      ? bookings
      : bookings.filter((booking) => booking.status === filter);

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    setBookings((currentBookings) =>
      currentBookings.map((booking) =>
        booking.id === id ? { ...booking, status } : booking,
      ),
    );
  };

  const handleTabChange = (key: string) => {
    if (key === "all" || key === "pending" || key === "confirmed") {
      setFilter(key);
    }
  };

  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Бронирования</h1>
      {/* <Sort placeholder="Выбор автомойки" /> Вернуть после добавления реальных данных */}
      <UISelect
        placeholder="Выбор автомойки"
        size="large"
        options={SELECT_OPTIONS}
        className="w-55 text-left mb-5!"
        defaultValue={SELECT_OPTIONS[0].options[0]}
      />
      <UITab
        items={items}
        activeKey={filter}
        onChange={handleTabChange}
      />
      <BookingsTable
        bookings={visibleBookings}
        onStatusChange={updateBookingStatus}
        pagination={{ pageSize: 10, showSizeChanger: false }}
      />
    </>
  );
};
