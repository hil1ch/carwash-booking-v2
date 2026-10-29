import { Checkbox, Form } from "antd";
import { UICheckboxGroup } from "../../../shared/ui/UICheckboxGroup";

const WORKING_DAYS = [
  { label: "Пн", value: "monday" },
  { label: "Вт", value: "tuesday" },
  { label: "Ср", value: "wednesday" },
  { label: "Чт", value: "thursday" },
  { label: "Пт", value: "friday" },
  { label: "Сб", value: "saturday" },
  { label: "Вс", value: "sunday" },
];

export const WorkingDaysField = () => (
  <Form.Item
    name="workingDays"
    rules={[{ required: true, message: "Выберите дни работы автомойки" }]}
    className="mb-0!"
    layout="vertical"
    label={<span className="text-base font-semibold">Дни работы</span>}
  >
    <UICheckboxGroup className="flex flex-wrap gap-2 w-full">
      {WORKING_DAYS.map(({ label, value }) => (
        <Checkbox
          key={value}
          value={value}
          className="m-0! rounded-md! border border-gray-200 px-4! py-2!"
        >
          {label}
        </Checkbox>
      ))}
    </UICheckboxGroup>
  </Form.Item>
);
