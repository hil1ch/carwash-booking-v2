// import type { Dispatch, SetStateAction } from "react";
import type { ServiceCategory } from "../../../entities/service";

export interface IFilters {
  // inStock: boolean;
  priceRange: [number, number];
  // washWays: string[];
  categories: ServiceCategory[];
}

export interface IFiltersProps {
  // setFilters: Dispatch<SetStateAction<IFilters>>;
  filtersValue: IFilters;
  defaultFilters: IFilters;
  onFiltersChange: () => void;
}
