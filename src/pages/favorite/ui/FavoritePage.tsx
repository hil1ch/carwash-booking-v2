import { Spin } from "antd";
import { CarWash } from "../../../entities/carwash";
import { useCarwashesQuery } from "../../../entities/carwash/model/queries";
import { useCarwashes } from "../../../entities/carwash/model/carwashes.store";
import { getAverageReviewRating } from "../../../shared/lib/getAverageReviewRating";
import { usePagination } from "../../../shared/lib/usePagination";
import { UIPagination } from "../../../shared/ui/UIPagination";
import { PAGINATION_PAGE_SIZE } from "../../../shared/constants/paginationPageSize";

export const FavoritePage = () => {
  const query = useCarwashesQuery();
  const carwashes = useCarwashes((state) => state.carwashes);
  const isInitialized = useCarwashes((state) => state.isInitialized);
  const favoriteCarwashes = carwashes.filter((carwash) => carwash.isFavorite);

  const { currentPage, setCurrentPage, paginatedItems } = usePagination(
    favoriteCarwashes,
    PAGINATION_PAGE_SIZE,
  );

  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Избранные автомойки</h1>
      <p className="text-sm text-gray-500 mb-5!">
        Сохраненные автомойки, которые вам понравились
      </p>
      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {(query.isPending || (query.isSuccess && !isInitialized)) && (
          <li>
            <Spin size="large" />
          </li>
        )}
        {query.isError && (
          <li role="alert">
            Не удалось загрузить автомойки: {query.error.message}
          </li>
        )}
        {query.isSuccess && isInitialized && favoriteCarwashes.length === 0 && (
          <li>В избранном пока нет автомоек.</li>
        )}
        {query.isSuccess &&
          isInitialized &&
          paginatedItems?.map((carwash) => (
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
      <UIPagination
        current={currentPage}
        total={favoriteCarwashes.length}
        onChange={setCurrentPage}
        pageSize={PAGINATION_PAGE_SIZE}
      />
    </>
  );
};
