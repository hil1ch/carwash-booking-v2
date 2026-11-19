import { useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { MapPinHouse, Star } from "lucide-react";
import { ServiceCard } from "../../../entities/service";
import { Carousel } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { ChevronLeft } from "lucide-react";
import { ROUTER_PATHS } from "../../../shared/constants";
import type { CarouselRef } from "antd";
import classNames from "classnames";
import { useCarwashQuery } from "../../../entities/carwash/model/queries";
import { getAverageReviewRating } from "../../../shared/lib/getAverageReviewRating";
import { WORD_DECLENSIONS } from "../../../shared/constants/wordDeclensions";
import { getDeclension } from "../../../shared/lib/getDeclension";

export const CarwashPage = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { carwashId } = useParams();
  const carwashQuery = useCarwashQuery(Number(carwashId));
  const carwashItem = carwashQuery.data;
  const images = carwashItem?.image ?? [];
  const reviews = carwashItem?.reviews ?? [];
  const washWays = carwashItem?.washWays ?? [];

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
      <div className="grid grid-cols-2 grid-rows-[minmax(0,1fr)] gap-10 my-5 flex-1 min-h-0 text-left">
        <div className="flex flex-col gap-4 min-h-0">
          <Carousel
            effect="fade"
            ref={carouselRef}
            infinite
            draggable
            beforeChange={(_, next) => setActiveImageIndex(next)}
            arrows
          >
            {images.map((image: string) => (
              <div
                key={image}
                // onClick={handleOpenModal}
                className="cursor-pointer mb-3 xl:mb-0"
              >
                <img
                  src={image}
                  className="h-auto w-full object-cover rounded-xl"
                />
              </div>
            ))}
          </Carousel>
          <ul className="flex gap-2 overflow-x-auto">
            {images.map((image: string) => (
              <button
                key={image}
                onClick={() => {
                  carouselRef.current?.goTo(images.indexOf(image));
                  setActiveImageIndex(images.indexOf(image));
                }}
                className={classNames(
                  "shrink-0 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer",
                  {
                    "border-blue-500":
                      activeImageIndex === images.indexOf(image),
                    "border-transparent":
                      activeImageIndex !== images.indexOf(image),
                  },
                )}
              >
                <img src={image} className="h-16 w-16 object-cover" />
              </button>
            ))}
          </ul>
          <p className="text-gray-500 font-medium">
            {carwashItem?.description}
          </p>
        </div>
        <div className="flex flex-col gap-4 min-h-0">
          <h2 className="text-2xl font-bold">{carwashItem?.name}</h2>
          <div className="text-sm text-gray-400 font-medium flex flex-col gap-2">
            <Link
              to={""}
              className="inline-flex self-start items-center gap-2 hover:text-gray-500 transition-all duration-300"
            >
              <Star size={20} color="orange" fill="orange" />
              <span>{getAverageReviewRating(reviews)}</span>
              <span>
                ({reviews.length}{" "}
                {getDeclension(reviews.length, WORD_DECLENSIONS)})
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <MapPinHouse size={20} />
              <span>{carwashItem?.location.address}</span>
            </div>
            <ul className="mt-2 flex items-center gap-2 text-sm text-blue-500 font-semibold">
              {washWays.map((washWay) => (
                <li key={washWay} className="px-2 py-1 bg-blue-50 rounded-xl">
                  {washWay}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-1 min-h-0 flex-col">
            <h5 className="font-semibold mb-5 shrink-0">Выберите услугу</h5>
            <ul className="flex flex-1 min-h-0 flex-col gap-2 overflow-y-auto">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
