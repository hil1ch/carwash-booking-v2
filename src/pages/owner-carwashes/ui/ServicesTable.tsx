import { useState } from "react";
import { Avatar, Dropdown } from "antd";
import type { MenuProps, TableColumnsType } from "antd";
import type { ReactNode } from "react";
import { Ellipsis, Armchair, Car, Layers, Paintbrush, Sparkles } from "lucide-react";
import { UIButton } from "../../../shared/ui/UIButton";
import { UITable } from "../../../shared/ui/UITable";
import { UISwitch } from "../../../shared/ui/UISwitch";

type CarWashService = {
  id: string;
  name: string;
  duration: string;
  price: number;
  active: boolean;
  icon: ReactNode;
};

const INITIAL_SERVICES: CarWashService[] = [
  {
    id: "express-wash",
    name: "Экспресс-мойка",
    duration: "30 мин",
    price: 600,
    active: true,
    icon: <Sparkles size={20} />,
  },
  {
    id: "body-interior-wash",
    name: "Мойка кузова + салон",
    duration: "1 ч 30 мин",
    price: 1500,
    active: true,
    icon: <Car size={20} />,
  },
  {
    id: "body-polishing",
    name: "Полировка кузова",
    duration: "2 ч",
    price: 2500,
    active: true,
    icon: <Paintbrush size={20} />,
  },
  {
    id: "interior-cleaning",
    name: "Химчистка салона",
    duration: "2 ч 30 мин",
    price: 3000,
    active: true,
    icon: <Armchair size={20} />,
  },
  {
    id: "wash-polishing-complex",
    name: "Комплекс (мойка + полировка)",
    duration: "3 ч",
    price: 4000,
    active: true,
    icon: <Layers size={20} />,
  },
];

export const ServicesTable = () => {
  const [services, setServices] = useState(INITIAL_SERVICES);

  const updateServiceStatus = (id: string, active: boolean) => {
    setServices((currentServices) =>
      currentServices.map((service) =>
        service.id === id ? { ...service, active } : service,
      ),
    );
  };

  const removeService = (id: string) => {
    setServices((currentServices) =>
      currentServices.filter((service) => service.id !== id),
    );
  };

  const columns: TableColumnsType<CarWashService> = [
    {
      title: "Услуга",
      dataIndex: "name",
      key: "name",
      render: (_: string, service) => (
        <div className="flex items-center gap-3">
          <Avatar
            size={44}
            icon={service.icon}
            className="shrink-0 bg-blue-50 text-blue-600"
          />
          <span className="font-semibold">{service.name}</span>
        </div>
      ),
    },
    {
      title: "Длительность",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Цена (от)",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `от ${price.toLocaleString("ru-RU")} ₽`,
    },
    {
      title: "Статус",
      dataIndex: "active",
      key: "active",
      align: "center",
      render: (active: boolean, service) => (
        <UISwitch
          aria-label={`Услуга «${service.name}» доступна`}
          checked={active}
          onChange={(checked) => updateServiceStatus(service.id, checked)}
        />
      ),
    },
    {
      key: "actions",
      width: 56,
      align: "center",
      render: (_: unknown, service) => {
        const items: MenuProps["items"] = [
          {
            key: "change",
            label: "Изменить услугу",
            onClick: () => removeService(service.id),
          },
          {
            key: "delete",
            label: "Удалить услугу",
            danger: true,
            onClick: () => removeService(service.id),
          },
        ];

        return (
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <UIButton type="text" icon={<Ellipsis size={20} />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <UITable<CarWashService>
      className="mt-3"
      columns={columns}
      dataSource={services}
      rowKey="id"
      scroll={{ x: 760 }}
    />
  );
};