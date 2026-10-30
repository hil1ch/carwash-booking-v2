import { UISelect } from "../../../shared/ui/UISelect";
import { SELECT_OPTIONS } from "../model/options";

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
    </>
  );
};
