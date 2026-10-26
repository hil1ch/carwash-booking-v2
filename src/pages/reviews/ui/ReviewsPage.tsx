import { UIButton } from "../../../shared/ui/UIButton";
import { Review } from "../../../entities/review";

export const ReviewsPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Мои отзывы</h1>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          Ваши отзывы помогают нам становиться лучше
        </p>
        <UIButton>Оставить отзыв</UIButton>
      </div>
      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </ul>
    </>
  );
};
