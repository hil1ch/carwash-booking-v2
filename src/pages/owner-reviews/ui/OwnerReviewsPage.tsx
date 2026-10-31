import { UISelect } from "../../../shared/ui/UISelect";
import { UIStatistic } from "../../../shared/ui/UIStatistic";
import { UIReviewRatingBreakdown } from "../../../shared/ui/UIReviewRatingBreakdown";
import { SELECT_OPTIONS } from "../model/options";
import { Rate } from "antd";
import { Review } from "../../../entities/review";

export const OwnerReviewsPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Отзывы клиентов</h1>
      {/* <Sort placeholder="Выбор автомойки" /> Вернуть после добавления реальных данных */}
      <UISelect
        placeholder="Выбор автомойки"
        size="large"
        options={SELECT_OPTIONS}
        className="w-55 text-left"
        defaultValue={SELECT_OPTIONS[0].options[0]}
      />
      <div className="mt-5 grid gap-4 grid-cols-2">
        <UIStatistic title={"На основе 124 отзывов"} value={4.8} precision={1}>
          <Rate disabled value={4.5} className="mt-2!" />
        </UIStatistic>
        <UIReviewRatingBreakdown counts={{ 5: 114, 4: 8, 3: 1, 2: 1, 1: 0 }} />
      </div>
      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto mt-5">
        <Review authorDisplay="user" />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </ul>
    </>
  );
};
