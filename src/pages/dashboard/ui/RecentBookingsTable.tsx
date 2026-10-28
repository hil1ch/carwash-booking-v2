import { useState } from "react";
import { Avatar, Dropdown } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { UITag } from "../../../shared/ui/UITag";
import { UITable } from "../../../shared/ui/UITable";
import type { MenuProps, TableColumnsType } from "antd";
import { Ellipsis, UserRound } from "lucide-react";

type BookingStatus = "confirmed" | "pending";

type Booking = {
  id: string;
  customer: string;
  phone: string;
  service: string;
  date: string;
  status: BookingStatus;
};

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: "booking-1",
    customer: "Иван Петров",
    phone: "+7 800 523-45-67",
    service: "Керамическая мойка",
    date: "12 апр, 14:00",
    status: "confirmed",
  },
  {
    id: "booking-2",
    customer: "Анна Смирнова",
    phone: "+7 812 345-04-09",
    service: "Мойка кузова + салон",
    date: "12 апр, 15:30",
    status: "pending",
  },
  {
    id: "booking-2",
    customer: "Анна Смирнова",
    phone: "+7 812 345-04-09",
    service: "Мойка кузова + салон",
    date: "12 апр, 15:30",
    status: "pending",
  },
  {
    id: "booking-2",
    customer: "Анна Смирнова",
    phone: "+7 812 345-04-09",
    service: "Мойка кузова + салон",
    date: "12 апр, 15:30",
    status: "pending",
  },
  {
    id: "booking-2",
    customer: "Анна Смирнова",
    phone: "+7 812 345-04-09",
    service: "Мойка кузова + салон",
    date: "12 апр, 15:30",
    status: "pending",
  },
];

export const RecentBookingsTable = () => {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);

  const updateStatus = (id: string, status: BookingStatus) => {
    setBookings((currentBookings) =>
      currentBookings.map((booking) =>
        booking.id === id ? { ...booking, status } : booking,
      ),
    );
  };

  const columns: TableColumnsType<Booking> = [
    {
      title: "Клиент",
      dataIndex: "customer",
      key: "customer",
      render: (_: string, booking) => (
        <div className="flex items-center gap-3">
          <Avatar
            size={44}
            icon={<UserRound size={23} />}
            className="shrink-0 bg-blue-50 text-blue-600"
          />
          <div className="min-w-0">
            <div className="font-semibold">
              {booking.customer}
            </div>
            <div className="mt-1 text-sm text-gray-500">{booking.phone}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Услуги",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Время",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      render: (status: BookingStatus) => (
        <UITag
          variant="filled"
          color={status === "confirmed" ? "success" : "warning"}
        >
          {status === "confirmed" ? "Подтверждено" : "Ожидает"}
        </UITag>
      ),
    },
    {
      key: "actions",
      width: 56,
      align: "center",
      render: (_: unknown, booking) => {
        const items: MenuProps["items"] = [
          booking.status === "pending"
            ? {
                key: "confirm",
                label: "Подтвердить",
                onClick: () => updateStatus(booking.id, "confirmed"),
              }
            : {
                key: "pending",
                label: "Снять подтверждение",
                danger: true,
                onClick: () => updateStatus(booking.id, "pending"),
              },
        ];

        return (
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <UIButton
              type="text"
              aria-label={`Действия для записи: ${booking.customer}`}
              icon={<Ellipsis size={20} />}
            />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <UITable<Booking>
      className="mt-3"
      columns={columns}
      dataSource={bookings}
      rowKey="id"
      scroll={{ x: 680 }}
    />
  );
};
