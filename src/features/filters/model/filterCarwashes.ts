import type { Carwash } from "../../../entities/carwash/model/types";
import { DEFAULT_FILTERS } from "./defaults";
import type { FiltersState } from "./types";

export const filterCarwashes = (
  carwashes: Carwash[],
  filters: FiltersState,
): Carwash[] => {
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
        (!hasCategoryFilter || filters.categories.includes(service.category)) &&
        (!hasPriceFilter ||
          (service.price >= minPrice && service.price <= maxPrice)),
    ),
  );
};
