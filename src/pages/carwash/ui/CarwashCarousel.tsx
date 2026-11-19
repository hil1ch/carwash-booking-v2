import classNames from "classnames";
import { Carousel } from "antd";
import type { RefObject } from "react";
import type { CarouselRef } from "antd";
import type { Carwash } from "../../../entities/carwash/model/types";

interface ICarwashCarouselProps {
  carouselRef: RefObject<CarouselRef | null>;
  activeImageIndex: number;
  setActiveImageIndex: (activeImageIndex: number) => void;
  carwashItem: Carwash;
}

export const CarwashCarousel = ({
  carouselRef,
  activeImageIndex,
  setActiveImageIndex,
  carwashItem,
}: ICarwashCarouselProps) => {
  return (
    <>
      <Carousel
        effect="fade"
        ref={carouselRef}
        infinite
        draggable
        beforeChange={(_, next) => setActiveImageIndex(next)}
        arrows
      >
        {carwashItem.image.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="cursor-pointer mb-3 xl:mb-0"
          >
            <img
              src={image}
              alt={`${carwashItem.name}, фото ${index + 1}`}
              className="h-auto w-full object-cover rounded-xl"
            />
          </div>
        ))}
      </Carousel>
      <ul className="flex gap-2 overflow-x-auto">
        {carwashItem.image.map((image, index) => (
          <li key={`${image}-${index}`}>
            <button
              type="button"
              aria-label={`Показать фото ${index + 1}`}
              aria-current={activeImageIndex === index}
              onClick={() => {
                carouselRef.current?.goTo(index);
                setActiveImageIndex(index);
              }}
              className={classNames(
                "shrink-0 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer",
                {
                  "border-blue-500": activeImageIndex === index,
                  "border-transparent opacity-50": activeImageIndex !== index,
                },
              )}
            >
              <img src={image} alt="" className="h-16 w-16 object-cover" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
