import { create } from "zustand";
import type { IFilters } from "./types";
import type { Carwash } from "../../../entities/carwash/model/types";

export const DEFAULT_FILTERS: IFilters = {
  priceRange: [0, 12000],
  categories: [],
};

const createDefaultFilters = (): IFilters => ({
  priceRange: [0, 12000],
  categories: [],
});

export interface IFiltersStore {
  filters: IFilters;
  updateFilters: (changes: Partial<IFilters>) => void;
  filterCarwashes: (carwashes: Carwash[]) => Carwash[];
  resetFilters: () => void;
}

export const useFilters = create<IFiltersStore>((set, get) => ({
  filters: createDefaultFilters(),

  updateFilters: (changes) =>
    set((state) => ({
      filters: { ...state.filters, ...changes },
    })),

  filterCarwashes: (carwashes) => {
    const { filters } = get();
    const [minPrice, maxPrice] = filters.priceRange;

    const hasCategoryFilter = filters.categories.length > 0;
    const hasPriceFilter =
      minPrice > DEFAULT_FILTERS.priceRange[0] ||
      maxPrice < DEFAULT_FILTERS.priceRange[1];

    if (!hasCategoryFilter && !hasPriceFilter) return carwashes;

    return carwashes.filter((carwash) =>
      carwash.services.some(
        (service) =>
          service.isActive &&
          (!hasCategoryFilter ||
            filters.categories.includes(service.category)) &&
          (!hasPriceFilter ||
            (service.price >= minPrice && service.price <= maxPrice)),
      ),
    );
  },

  resetFilters: () => set({ filters: createDefaultFilters() }),
}));
