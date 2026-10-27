import { SELECT_OPTIONS } from "../model/options";
import { UISelect } from "../../../shared/ui/UISelect";

export const Sort = ({ placeholder }: { placeholder: string }) => {
  return (
    <UISelect
      placeholder={placeholder}
      size="large"
      options={SELECT_OPTIONS}
      className="w-55 text-left"
    ></UISelect>
  );
};
