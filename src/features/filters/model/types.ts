// import type { Dispatch, SetStateAction } from "react";
import type { ServiceCategory } from "../../../entities/service";

export type PriceRange = [number, number];

export interface FiltersState {
  // inStock: boolean;
  priceRange: PriceRange;
  // washWays: string[];
  categories: ServiceCategory[];
}

export interface FiltersProps {
  // setFilters: Dispatch<SetStateAction<IFilters>>;
  onFiltersChange: () => void;
}
