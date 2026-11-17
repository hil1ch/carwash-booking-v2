// import type { Dispatch, SetStateAction } from "react";
import type { ServiceCategory } from "../../../entities/service";

export type PriceRange = [number, number];

export interface FiltersState {
  // inStock: boolean;
  priceRange: PriceRange | null;
  // washWays: string[];
  categories: ServiceCategory[];
}

export interface FiltersProps {
  // setFilters: Dispatch<SetStateAction<IFilters>>;
  defaultPriceRange: PriceRange;
  onFiltersChange: () => void;
}
