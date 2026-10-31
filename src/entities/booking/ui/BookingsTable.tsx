import { Avatar, Dropdown } from "antd";
import type { MenuProps, TableColumnsType, TableProps } from "antd";
import { Ellipsis, UserRound } from "lucide-react";
import { UIButton } from "../../../shared/ui/UIButton";
import { UITable } from "../../../shared/ui/UITable";
import { UITag } from "../../../shared/ui/UITag";
import type { Booking, BookingStatus } from "../model/types";

type BookingsTableProps = {
  bookings: Booking[];
  onStatusChange: (id: string, status: BookingStatus) => void;
  pagination?: TableProps<Booking>["pagination"];
};

const formatBookingDate = (date: string) =>
  new Date(date).toLocaleString("ru-RU", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

export const BookingsTable = ({
  bookings,
  onStatusChange,
  // pagination = false,
}: BookingsTableProps) => {
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
          <div className="min-w-0 flex flex-col">
            <span className="font-semibold">{booking.customer}</span>
            <span className="mt-1 text-sm text-gray-500">{booking.phone}</span>
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
      render: (date: string) => formatBookingDate(date),
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
                onClick: () => onStatusChange(booking.id, "confirmed"),
              }
            : {
                key: "pending",
                label: "Снять подтверждение",
                danger: true,
                onClick: () => onStatusChange(booking.id, "pending"),
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
      // pagination={pagination}
    />
  );
};
