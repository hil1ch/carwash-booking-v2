import { SELECT_OPTIONS } from "../model/options";
import { UISelect } from "../../../shared/ui/UISelect";
import type { SortPriceValue } from "../model/sorting";

interface ISortProps {
  placeholder: string;
  value: SortPriceValue;
  setSorting: (sorting: SortPriceValue) => void;
}

export const Sort = ({ placeholder, value, setSorting }: ISortProps) => {
  const handleChange = (value: SortPriceValue | undefined) => {
    setSorting(value ?? null);
  };

  return (
    <UISelect
      placeholder={placeholder}
      size="large"
      options={SELECT_OPTIONS}
      className="w-55 text-left"
      value={value ?? undefined}
      allowClear
      onChange={handleChange}
    />
  );
};
