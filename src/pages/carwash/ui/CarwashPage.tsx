import { useRef, useState } from "react";
import { useParams } from "react-router";
import { ChevronLeft, MapPinHouse, Star } from "lucide-react";
import { ServiceCard } from "../../../entities/service";
import { Spin } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { ROUTER_PATHS } from "../../../shared/constants";
import type { CarouselRef } from "antd";
import { useCarwashQuery } from "../../../entities/carwash/model/queries";
import { getAverageReviewRating } from "../../../shared/lib/getAverageReviewRating";
import { WORD_DECLENSIONS } from "../../../shared/constants/wordDeclensions";
import { getDeclension } from "../../../shared/lib/getDeclension";
import { CarwashCarousel } from "./CarwashCarousel";
import { UIPagination } from "../../../shared/ui/UIPagination";
import { usePagination } from "../../../shared/lib/usePagination";
import { PAGINATION_PAGE_SIZE } from "../../../shared/constants/paginationPageSize";
import { parsePositiveId } from "../../../shared/lib/parsePositiveId";

export const CarwashPage = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { carwashId: carwashIdParam } = useParams();
  const carwashId = parsePositiveId(carwashIdParam);
  const carwashQuery = useCarwashQuery(carwashId);
  const carwashItem = carwashQuery.data;

  const { currentPage, setCurrentPage, paginatedItems } = usePagination(
    carwashItem?.services,
    PAGINATION_PAGE_SIZE,
  );

  return (
    <div className="max-w-6xl w-full h-[calc(100dvh-var(--header-height)-2.5rem)] mx-auto flex flex-col overflow-hidden">
      <div className="flex justify-start shrink-0">
        <UIButton
          isLink
          href={ROUTER_PATHS.CARWASHES}
          className="p-0!"
          type="link"
          iconStart={<ChevronLeft size={20} />}
        >
          Назад к списку
        </UIButton>
      </div>
      {!carwashId && (
        <p role="alert" className="my-5">
          Некорректный идентификатор автомойки.
        </p>
      )}
      {carwashId && carwashQuery.isPending && (
        <Spin size="large" className="my-5" />
      )}
      {carwashId && carwashQuery.isError && (
        <div role="alert" className="my-5 flex flex-col items-center gap-3">
          <p>Не удалось загрузить автомойку: {carwashQuery.error.message}</p>
          <UIButton
            onClick={() => void carwashQuery.refetch()}
            disabled={carwashQuery.isFetching}
          >
            Повторить
          </UIButton>
        </div>
      )}
      {carwashId && carwashQuery.isSuccess && !carwashItem && (
        <p role="alert" className="my-5">
          Автомойка не найдена.
        </p>
      )}
      {carwashId && carwashQuery.isSuccess && carwashItem && (
        <div className="grid grid-cols-2 grid-rows-[minmax(0,1fr)] gap-10 my-5 flex-1 min-h-0 text-left">
          <div className="flex flex-col gap-4 min-h-0">
            {carwashItem.image.length > 0 ? (
              <CarwashCarousel
                carouselRef={carouselRef}
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                carwashItem={carwashItem}
              />
            ) : (
              <p className="text-gray-500">Фото не добавлены.</p>
            )}
            <p className="text-gray-500 font-medium">
              {carwashItem.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 min-h-0">
            <h2 className="text-2xl font-bold">{carwashItem.name}</h2>
            <div className="text-sm text-gray-400 font-medium flex flex-col gap-2">
              <div className="inline-flex self-start items-center gap-2">
                <Star size={20} color="orange" fill="orange" />
                <span>{getAverageReviewRating(carwashItem.reviews)}</span>
                <span>
                  ({carwashItem.reviews.length}{" "}
                  {getDeclension(carwashItem.reviews.length, WORD_DECLENSIONS)})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinHouse size={20} />
                <span>{carwashItem.location.address}</span>
              </div>
              <ul className="mt-2 flex items-center gap-2 text-sm text-blue-500 font-semibold">
                {carwashItem.washWays.map((washWay) => (
                  <li key={washWay} className="px-2 py-1 bg-blue-50 rounded-xl">
                    {washWay}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-1 min-h-0 flex-col">
              <h5 className="font-semibold mb-5 shrink-0">Выберите услугу</h5>
              <ul className="flex flex-1 min-h-0 flex-col gap-2 overflow-y-auto">
                {paginatedItems?.map((service) => (
                  <ServiceCard
                    key={service.id}
                    carwashId={carwashItem.id}
                    service={service}
                  />
                ))}
              </ul>
              <UIPagination
                current={currentPage}
                total={carwashItem.services.length}
                onChange={setCurrentPage}
                pageSize={PAGINATION_PAGE_SIZE}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
