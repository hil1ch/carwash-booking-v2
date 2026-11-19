export type SortPriceValue = null | "upscale" | "descale";

const getSortingCarwashes = <T extends { price: number }>(
  carwashes: T[],
  price: SortPriceValue,
): T[] => {
  if (price === null) return [...carwashes];

  return [...carwashes].sort((carwashA, carwashB) =>
    price === "upscale"
      ? carwashA.price - carwashB.price
      : carwashB.price - carwashA.price,
  );
};

export default getSortingCarwashes;