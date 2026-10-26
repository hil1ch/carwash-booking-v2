import { Link } from "react-router";
import carwashImg from "../assets/carwash-example.webp";
import { MapPinHouse, Star } from "lucide-react";
import { ServiceCard } from "../../../entities/service";
import { Carousel } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { ChevronLeft } from "lucide-react";

export const CarwashPage = () => {
  return (
    <div className="max-w-6xl w-full h-[calc(100dvh-var(--header-height)-2.5rem)] mx-auto flex flex-col overflow-hidden">
      <div className="flex justify-start shrink-0">
        <UIButton
          isLink
          href=""
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
            // ref={carouselRef}
            infinite
            draggable
            // className="single-product-carousel"
            // beforeChange={(_, next) => setActiveImageIndex(next)}
            arrows
          >
            {/* {images.map((image) => (
              <div
                key={image}
                onClick={handleOpenModal}
                className="cursor-pointer mb-3 xl:mb-0"
              >
                <Image
                  source={image}
                  className="mx-auto max-h-120 h-auto w-full object-cover max-w-70 sm:max-w-85 md:max-w-100 xl:max-w-113 2xl:w-96 2xl:max-w-none shrink-0 rounded-2xl"
                />
              </div>
            ))} */}
            <img
              alt="Изображение автомойки"
              src={carwashImg}
              className="rounded-xl h-auto w-full"
            />
          </Carousel>
          <ul className="flex gap-2 overflow-x-auto">
            {/* {images.map((image) => (
              <button
                key={image}
                onClick={() => {
                  carouselRef.current?.goTo(images.indexOf(image));
                  setActiveImageIndex(images.indexOf(image));
                }}
                className={classNames(
                  "shrink-0 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer",
                  {
                    "border-primary":
                      activeImageIndex === images.indexOf(image),
                    "border-transparent":
                      activeImageIndex !== images.indexOf(image),
                  },
                )}
              >
                <Image source={image} className="h-16 w-16 object-cover" />
              </button>
            ))} */}
            <li>
              <button className="shrink-0 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer">
                <img
                  src={carwashImg}
                  className="h-20 w-20 object-cover"
                  alt="Изображение автомойки"
                />
              </button>
            </li>
            <li>
              <button className="shrink-0 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer">
                <img
                  src={carwashImg}
                  className="h-20 w-20 object-cover"
                  alt="Изображение автомойки"
                />
              </button>
            </li>
            <li>
              <button className="shrink-0 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer">
                <img
                  src={carwashImg}
                  className="h-20 w-20 object-cover"
                  alt="Изображение автомойки"
                />
              </button>
            </li>
          </ul>
          <p className="text-gray-500 font-medium">
            Современная автомойка с профессиональным оборудованием и опытными
            сотрудниками. Мы заботимся о вашем автомобиле и предлагаем широкий
            спектр услуг - от базовой мойки до комплексной химчистки и полировки
          </p>
        </div>
        <div className="flex flex-col gap-4 min-h-0">
          <h2 className="text-2xl font-bold">AquaCar</h2>
          <div className="text-sm text-gray-400 font-medium flex flex-col gap-2">
            <Link
              to={""}
              className="inline-flex self-start items-center gap-2 hover:text-gray-500 transition-all duration-300"
            >
              <Star size={20} color="orange" fill="orange" />
              <span>4.8</span>
              <span>(134 отзыва)</span>
            </Link>
            <div className="flex items-center gap-2">
              <MapPinHouse size={20} />
              <span>ул. Молодежная 25</span>
            </div>
            <ul className="mt-2 flex items-center gap-2 text-sm text-blue-500 font-semibold">
              <li className="px-2 py-1 bg-blue-50 rounded-xl">Ручная</li>
              <li className="px-2 py-1 bg-blue-50 rounded-xl">
                Автоматическая
              </li>
              <li className="px-2 py-1 bg-blue-50 rounded-xl">Химчистка</li>
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
