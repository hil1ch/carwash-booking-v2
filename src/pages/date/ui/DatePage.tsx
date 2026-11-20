import { useMemo, useState } from "react";
import { Wallet, Timer } from "lucide-react";
import { DateSelector } from "./DateSelector";
import { Radio } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { useParams } from "react-router";
import { useCarwashQuery } from "../../../entities/carwash/model/queries";
import { createDateOptions } from "../lib/createDateOptions";
import { timePeriods } from "../model/timePeriods";
import { ROUTER_PATHS } from "../../../shared/constants";

export const DatePage = () => {
  const dates = useMemo(() => createDateOptions(5), []);
  const [selectedDate, setSelectedDate] = useState(dates[0]?.value ?? "");
  const [selectedTime, setSelectedTime] = useState<string>();

  const { carwashId: carwashIdParam } = useParams();
  const parsedCarwashId = Number(carwashIdParam);
  const carwashId =
    /^\d+$/.test(carwashIdParam ?? "") &&
    Number.isSafeInteger(parsedCarwashId) &&
    parsedCarwashId > 0
      ? parsedCarwashId
      : undefined;
  const carwashQuery = useCarwashQuery(carwashId);
  const carwashItem = carwashQuery.data;
  const services = carwashItem?.services;

  const image = carwashItem?.image[0];

  const { serviceId: serviceIdParam } = useParams();
  const parsedServiceId = Number(serviceIdParam);
  const serviceItem = services?.find(
    (service) => service.id === parsedServiceId,
  );

  const canContinue = Boolean(selectedDate && selectedTime);
  // const bookingSelection = canContinue
  //   ? { date: selectedDate, time: selectedTime }
  //   : null;

  const pathToPayment = `${ROUTER_PATHS.CARWASHES}/${carwashId}/${serviceIdParam}/${ROUTER_PATHS.PAYMENT}`;

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="grid grid-cols-[1fr_3fr] items-start gap-8">
        <div>
          <div className="border border-blue-100 p-2 rounded-xl bg-white text-left">
            <img
              alt="Изображение автомойки"
              src={image}
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
          <UIButton
            isLink
            href={pathToPayment}
            className="mt-5"
            disabled={!canContinue}
          >
            Перейти к оплате
          </UIButton>
        </div>

        <div className="flex flex-col gap-5">
          <DateSelector
            dates={dates}
            value={selectedDate}
            onChange={setSelectedDate}
          />
          <div className="flex flex-col gap-5 text-left">
            <div className="flex flex-col gap-4">
              <Radio.Group
                aria-label="Выберите время"
                value={selectedTime}
                onChange={(event) => setSelectedTime(event.target.value)}
                className="flex flex-col gap-5 text-left"
              >
                {timePeriods.map((period) => (
                  <section key={period.title} className="flex flex-col gap-4">
                    <h6 className="text-sm font-semibold mt-4">
                      {period.title}
                    </h6>

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
      </div>
    </div>
  );
};
