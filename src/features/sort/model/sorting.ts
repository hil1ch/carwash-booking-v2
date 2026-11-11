import type { ICarwashDto } from "../../../shared/api/generated";

export type SortPriceValue = null | "upscale" | "descale";

const getSortingCarwashes = (
  carwashes: ICarwashDto[],
  price: SortPriceValue,
) => {
  if (price === null) return [...carwashes];

  return [...carwashes].sort((carwashA, carwashB) =>
    price === "upscale"
      ? carwashA.price - carwashB.price
      : carwashB.price - carwashA.price,
  );
};

export default getSortingCarwashes;