import { useState } from "react";

import { CarWash } from "../../../entities/carwash";
import { Filters } from "../../../features/filters";
import { Search } from "../../../features/search";
import { Sort } from "../../../features/sort";
import type { IFilters } from "../../../features/filters/model/types";

const defaultFilters: IFilters = {
  inStock: false,
  priceRange: [0, 12000],
  carwashType: [],
};

export const CarWashesPage = () => {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex items-center gap-4 my-5 w-full justify-end">
        <Search />
        <Sort placeholder="Сортировка" />
      </div>
      <div className="grid grid-cols-[1fr_3fr] items-start gap-6">
        <Filters
          setFilters={setFilters}
          filtersValue={filters}
          defaultFilters={defaultFilters}
        />
        <CarWash />
      </div>
    </div>
  );
};
