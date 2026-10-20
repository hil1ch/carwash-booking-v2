import { SELECT_OPTIONS } from "../model/options";
import { UISelect } from "../../../shared/ui/UISelect";

export const Sort = () => {
  return (
    <UISelect
      placeholder="Сортировка"
      size="large"
      options={SELECT_OPTIONS}
      className="w-55 text-left"
    ></UISelect>
  );
};
