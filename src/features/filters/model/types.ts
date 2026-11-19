// import type { Dispatch, SetStateAction } from "react";
import type { ServiceCategory } from "../../../entities/service";
import type { WashWay } from "../../../entities/carwash/model/types";

export type PriceRange = [number, number];

export interface FiltersState {
  // inStock: boolean;
  priceRange: PriceRange | null;
  washWays: WashWay[];
  categories: ServiceCategory[];
}

export interface FiltersProps {
  // setFilters: Dispatch<SetStateAction<IFilters>>;
  defaultPriceRange: PriceRange;
  onFiltersChange: () => void;
}
