import type { FiltersState } from "./types";

export const createDefaultFilters = (): FiltersState => ({
  priceRange: null,
  categories: [],
});
