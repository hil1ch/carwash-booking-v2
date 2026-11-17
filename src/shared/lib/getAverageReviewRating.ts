import type { ICarwashDto } from "../api/generated";

export const getAverageReviewRating = (
  reviews: ICarwashDto["reviews"],
): number => {
  if (reviews.length === 0) return 0;

  const totalRating = reviews.reduce(
    (total, review) => total + review.rating,
    0,
  );
  return totalRating / reviews.length;
};
