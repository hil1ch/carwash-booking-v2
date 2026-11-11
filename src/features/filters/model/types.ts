import type { Dispatch, SetStateAction } from "react";

export interface IFilters {
  inStock: boolean;
  priceRange: [number, number];
  washWays: string[];
  services: string[];
}

export interface IFiltersProps {
  setFilters: Dispatch<SetStateAction<IFilters>>;
  filtersValue: IFilters;
  defaultFilters: IFilters;
}