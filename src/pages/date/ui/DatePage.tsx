import { useMemo, useState } from "react";
import { Wallet, Timer } from "lucide-react";
import { DateSelector } from "./DateSelector";
import type { DateOption } from "./DateSelector";
import { Radio } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";

const createDateOptions = (count: number): DateOption[] => {
  const today = new Date();

  return Array.from({ length: count }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);

    const value = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");

    return {
      value,
      title:
        index === 0
          ? "Сегодня"
          : new Intl.DateTimeFormat("ru-RU", { weekday: "short" })
              .format(date)
              .replace(/\.$/, "")
              .replace(/^\p{L}/u, (letter) =>
                letter.toLocaleUpperCase("ru-RU"),
              ),
      day: date.getDate(),
      month: new Intl.DateTimeFormat("ru-RU", { month: "short" })
        .format(date)
        .replace(/\.$/, ""),
    };
  });
};

export const DatePage = () => {
  const dates = useMemo(() => createDateOptions(5), []);
  const [selectedDate, setSelectedDate] = useState(dates[0]?.value ?? "");

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="grid grid-cols-[1fr_3fr] items-start gap-6">
        <div>
          <div className="border border-blue-100 p-2 rounded-xl bg-white text-left">
            <h5 className="font-semibold">Мойка кузова + салон</h5>
            <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Wallet size={20} />
                <strong>1 200 Р</strong>
              </span>
              <span className="flex items-center gap-2 font-bold">
                <Timer size={20} />
                ~1ч 30мин
              </span>
            </div>
          </div>
          <UIButton isLink href="" className="mt-5">
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
              <h6 className="text-sm font-semibold">Утро</h6>
              <Radio.Group
                //   onChange={onChange}
                defaultValue="a"
                className="grid! grid-cols-5 gap-2 w-full font-semibold"
              >
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="a"
                >
                  9:00
                </Radio.Button>
                <Radio.Button
                  value="b"
                  disabled
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                >
                  9:30
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="c"
                >
                  10:00
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="d"
                >
                  10:30
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="e"
                >
                  11:00
                </Radio.Button>
              </Radio.Group>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-sm font-semibold">День</h6>
              <Radio.Group
                //   onChange={onChange}
                defaultValue="a"
                className="grid! grid-cols-5 gap-2 w-full font-semibold"
              >
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="a"
                >
                  12:00
                </Radio.Button>
                <Radio.Button
                  value="b"
                  disabled
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                >
                  12:30
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="c"
                >
                  13:00
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="d"
                >
                  13:30
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="e"
                >
                  14:00
                </Radio.Button>
              </Radio.Group>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-sm font-semibold">Вечер</h6>
              <Radio.Group
                //   onChange={onChange}
                defaultValue="a"
                className="grid! grid-cols-5 gap-2 w-full font-semibold"
              >
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="a"
                >
                  16:00
                </Radio.Button>
                <Radio.Button
                  value="b"
                  disabled
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                >
                  16:30
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="c"
                >
                  17:00
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="d"
                >
                  17:30
                </Radio.Button>
                <Radio.Button
                  className="flex! items-center justify-center rounded-lg! text-center p-3! min-h-12!"
                  value="e"
                >
                  18:00
                </Radio.Button>
              </Radio.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
