import { Divider } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
// import { UISwitch } from "../../../shared/ui/UISwitch";
import { PriceRangeFilter } from "./PriceRangeFilter";
// import { WashWayFilter } from "./WashWayFilter";

import type { IFiltersProps } from "../model/types";
import { CategoriesFilter } from "./CategoriesFilter";
import { useFilters } from "../model/filters.store";

export const Filters = ({
  filtersValue,
  defaultFilters,
  onFiltersChange,
}: IFiltersProps) => {
  const resetFilters = useFilters((state) => state.resetFilters);
  const updateFilters = useFilters((state) => state.updateFilters);

  const handleCategoryChange = (
    categories: IFiltersProps["filtersValue"]["categories"],
  ) => {
    updateFilters({ categories });
    onFiltersChange();
  };

  const handlePriceChange = (
    priceRange: IFiltersProps["filtersValue"]["priceRange"],
  ) => {
    updateFilters({ priceRange });
    onFiltersChange();
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

      {/* <div className="mt-6 items-start text-left">
        <h4 className="font-semibold">Занятость</h4>
        <div className="flex mt-3 items-center justify-between">
          <span className="text-sm">Только свободные автомойки</span>
          <UISwitch
            checked={filtersValue.inStock}
            onChange={(inStock) => updateFilters({ inStock })}
          />
        </div>
      </div> */}
      {/* <Divider /> */}
      {/* <WashWayFilter
        value={filtersValue.washWays}
        onChange={(washWays) => updateFilters({ washWays })}
      /> */}
      <Divider />
      <CategoriesFilter
        value={filtersValue.categories}
        onChange={handleCategoryChange}
      />
      <Divider />
      <PriceRangeFilter
        value={filtersValue.priceRange}
        defaultValue={defaultFilters.priceRange}
        onChange={handlePriceChange}
      />
    </div>
  );
};
