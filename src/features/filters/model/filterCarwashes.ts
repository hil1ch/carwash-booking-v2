import type { Carwash } from "../../../entities/carwash/model/types";
import type { FiltersState } from "./types";
import type { PriceRange } from "./types";

export const filterCarwashes = (
  carwashes: Carwash[],
  filters: FiltersState,
): Carwash[] => {
  const priceRange = filters.priceRange;
  const [minPrice, maxPrice] = priceRange ?? [0, 0];
  const hasCategoryFilter = filters.categories.length > 0;
  const hasWashWayFilter = filters.washWays.length > 0;
  const hasPriceFilter = priceRange !== null;

  if (!hasCategoryFilter && !hasWashWayFilter && !hasPriceFilter)
    return carwashes;

  return carwashes.filter((carwash) =>
    (!hasWashWayFilter ||
      filters.washWays.some((washWay) => carwash.washWays.includes(washWay))) &&
    carwash.services.some(
      (service) =>
        service.isActive &&
        (!hasCategoryFilter || filters.categories.includes(service.category)) &&
        (!hasPriceFilter ||
          (service.price >= minPrice && service.price <= maxPrice)),
    ),
  );
};

export const getPriceRange = (carwashes: Carwash[]) => {
  const prices =
    carwashes.flatMap((carwash) =>
      carwash.services
        .filter((service) => service.isActive)
        .map((service) => service.price),
    ) ?? [];

  if (prices.length === 0) return [0, 0] as PriceRange;

  return prices.reduce<PriceRange>(
    ([minPrice, maxPrice], price) => [
      Math.min(minPrice, price),
      Math.max(maxPrice, price),
    ],
    [Infinity, -Infinity],
  );
};
