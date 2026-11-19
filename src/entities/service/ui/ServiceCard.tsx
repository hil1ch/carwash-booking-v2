import { UIButton } from "../../../shared/ui/UIButton";
import { ROUTER_PATHS } from "../../../shared/constants";
import { UITag } from "../../../shared/ui/UITag";
import type { Service } from "../model/types";

type ServiceCardProps = {
  carwashId: number;
  service: Service;
};

export const ServiceCard = ({ carwashId, service }: ServiceCardProps) => {
  const serviceHref =
    service.id === undefined
      ? undefined
      : `${ROUTER_PATHS.CARWASHES}/${carwashId}/${service.id}`;

  return (
    <li className="border border-blue-100 p-2 rounded-xl bg-white w-full">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">{service.name}</h4>
          <span>
            от <strong>{service.price} ₽</strong>
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400 font-medium">
          <p>{service.description}</p>
          <span>~{service.durationMinutes} мин</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <UITag variant="outlined" color="blue" className="self-end">
          {service.category}
        </UITag>
        {serviceHref ? (
          <UIButton isLink href={serviceHref}>
            Выбрать
          </UIButton>
        ) : (
          <UIButton disabled>Выбрать</UIButton>
        )}
      </div>
    </li>
  );
};
