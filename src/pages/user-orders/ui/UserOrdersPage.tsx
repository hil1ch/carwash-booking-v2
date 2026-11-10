import { CarWash } from "../../../entities/carwash/ui/CarWash";
import { UITab } from "../../../shared/ui/UITab";

const items = [
  { key: "all", label: "Все" },
  { key: "past", label: "Прошедшие" },
  { key: "future", label: "Предстоящие" },
];

export const UserOrdersPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Мои записи</h1>
      <UITab items={items} />
      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {/* <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash />
        <CarWash /> */}
      </ul>
    </>
  );
};
