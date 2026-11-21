import { useMemo, useState } from "react";
import { Wallet, Timer } from "lucide-react";
import { DateSelector } from "./DateSelector";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { useLocation, useParams } from "react-router";
import { useCarwashQuery } from "../../../entities/carwash/model/queries";
import { createDateOptions } from "../lib/createDateOptions";
import { timePeriods } from "../model/timePeriods";
import { ROUTER_PATHS } from "../../../shared/constants";
import { parsePositiveId } from "../../../shared/lib/parsePositiveId";
import { UIBreadcrumb } from "../../../shared/ui/UIBreadcrumb";
import { createPagesBreadcrumb } from "../../../shared/lib/createPagesBreadcrumb";

export const DatePage = () => {
  const dates = useMemo(() => createDateOptions(5), []);
  const [selectedDate, setSelectedDate] = useState(dates[0]?.value ?? "");
  const [selectedTime, setSelectedTime] = useState<string>();

  const { carwashId: carwashIdParam, serviceId: serviceIdParam } = useParams();
  const { pathname } = useLocation();
  const carwashId = parsePositiveId(carwashIdParam);
  const serviceId = parsePositiveId(serviceIdParam);
  const carwashQuery = useCarwashQuery(carwashId);
  const carwashItem = carwashQuery.data;
  const serviceItem =
    serviceId === undefined
      ? undefined
      : carwashItem?.services.find((service) => service.id === serviceId);
  const paymentHref =
    carwashId !== undefined && serviceId !== undefined
      ? `${ROUTER_PATHS.CARWASHES}/${carwashId}/${serviceId}/${ROUTER_PATHS.PAYMENT}`
      : undefined;

  const canContinue = Boolean(
    selectedDate && selectedTime && serviceItem && paymentHref,
  );
  // const bookingSelection = canContinue
  //   ? { date: selectedDate, time: selectedTime }
  //   : null;

  const handleTimeChange = (event: RadioChangeEvent) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="max-w-6xl w-full mx-auto">
      <UIBreadcrumb
        items={createPagesBreadcrumb({
          pathname,
          carwashName: carwashItem?.name,
          serviceName: serviceItem?.name,
        })}
      />
      <div className="grid grid-cols-[1fr_3fr] items-start gap-8 mt-5">
        <div>
          <div className="border border-blue-100 p-2 rounded-xl bg-white text-left">
            <img
              alt="Изображение автомойки"
              src={carwashItem?.image[0]}
              className="rounded-lg mb-3"
            />
            <h5 className="font-semibold">{serviceItem?.name}</h5>
            <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Wallet size={20} />
                <span>{serviceItem?.price} ₽</span>
              </span>
              <span className="flex items-center gap-2">
                <Timer size={20} />~{serviceItem?.durationMinutes} мин
              </span>
            </div>
          </div>
          {paymentHref ? (
            <UIButton
              isLink
              href={paymentHref}
              className="mt-5"
              disabled={!canContinue}
            >
              Перейти к оплате
            </UIButton>
          ) : (
            <UIButton className="mt-5" disabled>
              Перейти к оплате
            </UIButton>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <DateSelector
            dates={dates}
            value={selectedDate}
            onChange={setSelectedDate}
          />
          <Radio.Group
            aria-label="Выберите время"
            value={selectedTime}
            onChange={handleTimeChange}
            className="flex flex-col gap-5 text-left"
          >
            {timePeriods.map((period) => (
              <section key={period.title} className="flex flex-col gap-4">
                <h6 className="text-sm font-semibold mt-4">{period.title}</h6>

                <div className="grid grid-cols-5 gap-2 w-full font-medium">
                  {period.slots.map((slot) => (
                    <Radio.Button
                      key={slot.value}
                      value={slot.value}
                      // disabled={slot.disabled}
                      className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                    >
                      {slot.value}
                    </Radio.Button>
                  ))}
                </div>
              </section>
            ))}
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};
