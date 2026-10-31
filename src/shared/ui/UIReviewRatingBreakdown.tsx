import { Progress, Card } from "antd";
import { Star } from "lucide-react";

type Rating = 1 | 2 | 3 | 4 | 5;

export const UIReviewRatingBreakdown = ({
  counts,
}: {
  counts: Record<Rating, number>;
}) => {
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

  return (
    <Card variant="borderless" aria-label="Распределение оценок">
      <div className="flex flex-col gap-2">
        {([5, 4, 3, 2, 1] as const).map((rating) => {
          const percentage = total === 0 ? 0 : (counts[rating] / total) * 100;

          return (
            <div
              key={rating}
              className="grid grid-cols-[1rem_1rem_minmax(5rem,1fr)_2.5rem] items-center gap-2"
            >
              <span className="text-sm">{rating}</span>
              <Star
                size={14}
                aria-hidden="true"
                className="fill-current text-amber-300"
              />
              <Progress percent={percentage} showInfo={false} size="small" />
              <span className="text-right text-sm">
                {Math.round(percentage)}%
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
