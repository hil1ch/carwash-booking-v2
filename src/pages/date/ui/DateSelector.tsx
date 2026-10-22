import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";

export interface DateOption {
  value: string;
  title: string;
  day: number;
  month: string;
}

interface DateSelectorProps {
  dates: DateOption[];
  value: string;
  onChange: (date: string) => void;
}

export const DateSelector = ({ dates, value, onChange }: DateSelectorProps) => {
  const handleChange = (event: RadioChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <fieldset className="min-w-0 border-0 p-0 text-left">
      <legend className="mb-5 font-semibold">Выберите дату</legend>
      <Radio.Group
        aria-label="Выберите дату"
        className="grid! grid-cols-5 gap-2 w-full"
        value={value}
        onChange={handleChange}
      >
        {dates.map((date) => (
          <Radio.Button
            key={date.value}
            className="flex! items-center p-1! justify-center w-full h-auto! min-h-16 rounded-xl! text-center "
            value={date.value}
          >
            <div className="flex flex-col items-center whitespace-nowrap font-semibold text-base">
              <span className="">{date.title}</span>
              <span className="text-sm">{date.day}</span>
              <span>{date.month}</span>
            </div>
          </Radio.Button>
        ))}
      </Radio.Group>
    </fieldset>
  );
};
