import { create } from "zustand";
import type { FiltersState } from "./types";
import { createDefaultFilters } from "./defaults";

export { DEFAULT_FILTERS } from "./defaults";

export interface IFiltersStore {
  filters: FiltersState;
  updateFilters: (changes: Partial<FiltersState>) => void;
  resetFilters: () => void;
}

export const useFilters = create<IFiltersStore>((set) => ({
  filters: createDefaultFilters(),

  updateFilters: (changes) =>
    set((state) => ({
      filters: { ...state.filters, ...changes },
    })),

  resetFilters: () => set({ filters: createDefaultFilters() }),
}));
