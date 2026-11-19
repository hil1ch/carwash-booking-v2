import { UIButton } from "../../../shared/ui/UIButton";
import { UITag } from "../../../shared/ui/UITag";
import type { Service } from "../model/types";

export const ServiceCard = ({
  name,
  price,
  description,
  durationMinutes,
  category,
}: Service) => {
  return (
    <li className="border border-blue-100 p-2 rounded-xl bg-white w-full">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">{name}</h4>
          <span>
            от <strong>{price} Р</strong>
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400 font-medium">
          <p>{description}</p>
          <span>~{durationMinutes}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <UITag variant="outlined" color="blue" className="self-end">
          {category}
        </UITag>
        <UIButton isLink href="">
          Выбрать
        </UIButton>
      </div>
    </li>
  );
};
