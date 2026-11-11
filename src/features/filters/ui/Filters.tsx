import { Divider } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { UISwitch } from "../../../shared/ui/UISwitch";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { WashWayFilter } from "./WashWayFilter";

import type { IFilters, IFiltersProps } from "../model/types";
import { ServicesFilter } from "./ServicesFilter";

export const Filters = ({
  setFilters,
  filtersValue,
  defaultFilters,
}: IFiltersProps) => {
  const updateFilters = (changes: Partial<IFilters>) => {
    setFilters((current) => ({ ...current, ...changes }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <div className="flex flex-col self-start">
      <div className="flex justify-between items-center self-start w-full">
        <h3 className="font-semibold text-lg">Фильтры</h3>
        <UIButton
          type="text"
          variant="text"
          color="primary"
          onClick={resetFilters}
        >
          Сбросить
        </UIButton>
      </div>

      <div className="mt-6 items-start text-left">
        <h4 className="font-semibold">Занятость</h4>
        <div className="flex mt-3 items-center justify-between">
          <span className="text-sm">Только свободные автомойки</span>
          <UISwitch
            checked={filtersValue.inStock}
            onChange={(inStock) => updateFilters({ inStock })}
          />
        </div>
      </div>
      <Divider />
      <WashWayFilter
        value={filtersValue.washWays}
        onChange={(washWays) => updateFilters({ washWays })}
      />
      <Divider />
      <ServicesFilter
        value={[]}
        onChange={function (value: string[]): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Divider />
      <PriceRangeFilter
        value={filtersValue.priceRange}
        defaultValue={defaultFilters.priceRange}
        onChange={(priceRange) => updateFilters({ priceRange })}
      />
    </div>
  );
};
