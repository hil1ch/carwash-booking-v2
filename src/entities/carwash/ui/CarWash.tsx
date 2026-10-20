// import type { Carwash } from "../model/types";
import carwashImg from "../assets/carwash-example.webp";
import { Heart, Star, MapPinHouse } from "lucide-react";
import { UIButton } from "../../../shared/ui/UIButton";

export const CarWash = () => {
  return (
    <div className="border border-blue-100 p-2 rounded-xl bg-white">
      <div className="flex items-start gap-5">
        <img
          alt="Изображение автомойки"
          src={carwashImg}
          className="rounded-lg max-w-56 h-auto"
        />
        <div className="flex flex-col gap-2 items-start w-full">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-lg font-semibold">Aqua Car</h4>
            <UIButton type="text" shape="round">
              <Heart fill="red" color="red" />
            </UIButton>
          </div>
          <div className="text-xs text-gray-400 font-semibold flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Star size={20} color="orange" fill="orange" />
              <span>4.8</span>
              <span>(134 отзыва)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinHouse size={20} />
              <span>ул. Молодежная 25</span>
            </div>
          </div>
          <ul className="flex items-center gap-2 text-xs text-blue-500 font-semibold">
            <li className="px-2 py-1 bg-blue-50 rounded-xl">Ручная</li>
            <li className="px-2 py-1 bg-blue-50 rounded-xl">Автоматическая</li>
            <li className="px-2 py-1 bg-blue-50 rounded-xl">Химчистка</li>
          </ul>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm">
              от <strong>600 Р</strong>
            </span>
            <UIButton>Выбрать</UIButton>
          </div>
        </div>
      </div>
    </div>
  );
};
