import { CarWash } from "../../../entities/carwash";
import { UITab } from "../../../shared/ui/UITab";
import type { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "all",
    label: "Все",
    // children: (

    // ),
  },
  {
    key: "past",
    label: "Прошедшие",
    // children: (

    // ),
  },
  {
    key: "future",
    label: "Предстоящие",
    // children: (

    // ),
  },
];

export const UserOrdersPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Мои записи</h1>
      <UITab items={items} />
      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
      </ul>
    </>
  );
};
