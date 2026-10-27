import { Segmented } from "antd";
import { UISelect } from "../../../shared/ui/UISelect";
import { SELECT_OPTIONS } from "../model/options";
import { UIStatistic } from "../../../shared/ui/UIStatistic";
import { RecentBookingsTable } from "./RecentBookingsTable";
import "./RecentBookingsTable.css";
import { UIButton } from "../../../shared/ui/UIButton";
import { MoveRight } from "lucide-react";

const PERIOD_OPTIONS = ["Сегодня", "7 дней", "Месяц"] as const;
type Period = (typeof PERIOD_OPTIONS)[number];

export const DashboardPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Дашборд</h1>
      <p className="text-sm text-gray-500">
        Общая статистика вашей сети автомоек
      </p>
      <div className="flex items-center justify-between mt-5">
        {/* <Sort placeholder="Выбор автомойки" /> Вернуть после добавления реальных данных */}
        <UISelect
          placeholder="Выбор автомойки"
          size="large"
          options={SELECT_OPTIONS}
          className="w-55 text-left"
          defaultValue={SELECT_OPTIONS[0].options[0]}
        />
        <Segmented<Period>
          aria-label="Период статистики"
          options={[...PERIOD_OPTIONS]}
          //   value={selectedPeriod}
          //   onChange={setSelectedPeriod}
          size="large"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <UIStatistic title="Всего бронирований" value={8} />
        <UIStatistic title="Ожидают подтверждения" value={3} />
        <UIStatistic title="Выручка" value={67000} />
      </div>
      <div className="flex items-center justify-between mt-10">
        <h3 className="text-base font-semibold">Последние бронирования</h3>
        <UIButton
          isLink
          href=""
          type="link"
          className="text-sm!"
          iconEnd={<MoveRight size={16} />}
        >
          Все бронирования
        </UIButton>
      </div>
      <RecentBookingsTable />
    </>
  );
};
