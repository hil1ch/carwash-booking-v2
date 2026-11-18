import { CarWash } from "../../../entities/carwash";
import { useCarwashesQuery } from "../../../entities/carwash/model/queries";
import { getAverageReviewRating } from "../../../shared/lib/getAverageReviewRating";

export const FavoritePage = () => {
  const carwashes = useCarwashesQuery();

  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Избранные автомойки</h1>
      <p className="text-sm text-gray-500 mb-5!">
        Сохраненные автомойки, которые вам понравились
      </p>
      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {carwashes.data?.map((carwash) => (
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
    </>
  );
};
