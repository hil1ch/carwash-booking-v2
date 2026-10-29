import { Form, TimePicker } from "antd";
import { Plus, Trash2 } from "lucide-react";
import { UIButton } from "../../../shared/ui/UIButton";

export const WorkingHoursField = () => (
  <>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Form.Item
        name="openingTime"
        rules={[{ required: true, message: "Укажите время открытия" }]}
        className="mb-0!"
        layout="vertical"
        label={<span className="text-base font-semibold">Открытие</span>}
      >
        <TimePicker
          format="HH:mm"
          minuteStep={15}
          className="w-full"
          placeholder="Время открытия"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="closingTime"
        rules={[{ required: true, message: "Укажите время закрытия" }]}
        className="mb-0!"
        layout="vertical"
        label={<span className="text-base font-semibold">Закрытие</span>}
      >
        <TimePicker
          format="HH:mm"
          minuteStep={15}
          className="w-full"
          placeholder="Время закрытия"
          size="large"
        />
      </Form.Item>
    </div>
    <Form.List name="breaks">
      {(fields, { add, remove }) => (
        <div className="flex flex-col gap-3">
          {fields.map((field, index) => (
            <div
              key={field.key}
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-end"
            >
              <Form.Item
                name={[field.name, "start"]}
                rules={[{ required: true, message: "Укажите начало перерыва" }]}
                className="mb-0! w-full"
                label={index === 0 ? "Перерыв с" : undefined}
              >
                <TimePicker
                  format="HH:mm"
                  minuteStep={15}
                  className="w-full"
                  placeholder="Начало"
                />
              </Form.Item>
              <Form.Item
                name={[field.name, "end"]}
                rules={[
                  { required: true, message: "Укажите окончание перерыва" },
                ]}
                className="mb-0! w-full"
                label={index === 0 ? "Перерыв до" : undefined}
              >
                <TimePicker
                  format="HH:mm"
                  minuteStep={15}
                  className="w-full"
                  placeholder="Окончание"
                />
              </Form.Item>
              <UIButton
                type="text"
                danger
                aria-label="Удалить перерыв"
                icon={<Trash2 size={18} />}
                onClick={() => remove(field.name)}
                className="shrink-0"
              />
            </div>
          ))}
          <UIButton
            type="dashed"
            icon={<Plus size={16} />}
            onClick={() => add()}
            className="self-start"
          >
            Добавить перерыв
          </UIButton>
        </div>
      )}
    </Form.List>
  </>
);
