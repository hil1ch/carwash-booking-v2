import { Heart, Star, MapPinHouse } from "lucide-react";
import { UIButton } from "../../../shared/ui/UIButton";
import { useCarwashes } from "../model/carwashes.store";
// import { UITag } from "../../../shared/ui/UITag";

interface ICarwashItemProps {
  id: number;
  name: string;
  // tag?: "Предстоящая" | "Прошедшая";
  image: string[];
  countReviews: string;
  score: number;
  address: string;
  price: number;
  isFavorite: boolean;
  href?: string;
}

export const CarWash = ({
  id,
  name,
  image,
  countReviews,
  score,
  address,
  price,
  isFavorite,
  href,
}: ICarwashItemProps) => {
  const toggleFavorite = useCarwashes((state) => state.toggleFavorite);

  return (
    <div className="border border-blue-100 p-2 rounded-xl bg-white">
      <div className="flex items-start gap-5">
        <img
          alt="Изображение автомойки"
          src={image[0]}
          className="rounded-lg max-w-50 h-auto"
        />
        <div className="flex flex-col gap-2 items-start w-full">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-lg font-semibold">{name}</h4>
            {/* <UITag variant="outlined" color="green">
              Предстоящая
            </UITag> */}
            <UIButton
              type="text"
              shape="round"
              onClick={() => toggleFavorite(id)}
            >
              <Heart
                fill={isFavorite ? "red" : "white"}
                color={isFavorite ? "red" : "currentColor"}
              />
            </UIButton>
          </div>
          <div className="text-sm text-gray-400 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Star size={20} color="orange" fill="orange" />
              <span>{score}</span>
              <span>({countReviews})</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinHouse size={20} />
              <span>{address}</span>
            </div>
          </div>
          {/* <ul className="flex items-center gap-2 text-xs text-blue-500 font-semibold">
            <li className="px-2 py-1 bg-blue-50 rounded-xl">Ручная</li>
            <li className="px-2 py-1 bg-blue-50 rounded-xl">Автоматическая</li>
            <li className="px-2 py-1 bg-blue-50 rounded-xl">Химчистка</li>
          </ul> */}
          <div className="flex items-end justify-between w-full">
            <span className="text-sm">
              от <strong>{price} ₽</strong>
            </span>
            {/* <span className="text-sm ml-auto ">12.10.2026</span> */}
            {href && (
              <UIButton isLink href={href}>
                Выбрать
              </UIButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
