import type { FiltersState } from "./types";

export const DEFAULT_FILTERS: FiltersState = {
  priceRange: [0, 12000],
  categories: [],
};

export const createDefaultFilters = (): FiltersState => ({
  priceRange: [...DEFAULT_FILTERS.priceRange],
  categories: [...DEFAULT_FILTERS.categories],
});
