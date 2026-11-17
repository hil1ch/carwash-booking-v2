import { CarWash } from "../../../entities/carwash";
import type { ICarwashDto } from "../../../shared/api/generated";
import { getAverageReviewRating } from "../../../shared/lib/getAverageReviewRating";

interface ICarwashesListProps {
  carwashes: ICarwashDto[] | undefined;
}

export const CarwashesList = ({ carwashes }: ICarwashesListProps) => {
  return (
    <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
      {carwashes?.map((carwash) => (
        <li key={carwash.id}>
          <CarWash
            id={carwash.id}
            name={carwash.name}
            image={carwash.image}
            countReviews={String(carwash.reviews.length)}
            score={getAverageReviewRating(carwash.reviews)}
            address={`${carwash.location.city}, ${carwash.location.address}`}
            price={carwash.price}
            isFavorite={carwash.isFavorite}
            href={`/carwashes/${carwash.id}`}
          />
        </li>
      ))}
    </ul>
  );
};
