import { UIModal } from "../../../shared/ui/UIModal";
import { Form, TimePicker } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UISelect } from "../../../shared/ui/UISelect";
import { SELECT_OPTIONS } from "../model/options";
import { UIInputNumber } from "../../../shared/ui/UIInputNumber";
import { UISwitch } from "../../../shared/ui/UISwitch";
import { UITextArea } from "../../../shared/ui/UITextArea";

export const CreateServiceModal = ({
  isServiceModalOpen,
}: {
  isServiceModalOpen: boolean;
}) => {
  return (
    <UIModal
      isModalOpen={isServiceModalOpen}
      title="Добавить услугу"
      okButtonClassName="w-full"
      okText="Добавить услугу"
      width={680}
    >
      <Form className="flex flex-col gap-7 w-full" noValidate>
        <div className="flex items-start w-full gap-6 mt-5">
          <Form.Item
            name="service"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите название услуги",
              },
            ]}
            className="mb-0! w-full"
            layout="vertical"
            label={
              <span className="text-base font-semibold">Название услуги</span>
            }
          >
            <UIInput type="text" placeholder="Название услуги" />
          </Form.Item>
          <Form.Item
            name="category"
            rules={[
              {
                required: true,
                message: "Пожалуйста, выберите категорию",
              },
            ]}
            className="mb-0! w-full"
            layout="vertical"
            label={<span className="text-base font-semibold">Категория</span>}
          >
            <UISelect
              options={SELECT_OPTIONS}
              size="large"
              placeholder="Выберите категорию"
            />
          </Form.Item>
        </div>
        <Form.Item
          label={
            <span className="text-base font-semibold">
              Описание{" "}
              <span className="text-gray-500 font-normal text-sm">
                (необязательно)
              </span>
            </span>
          }
          name="description"
          className="w-full mb-0!"
          layout="vertical"
        >
          <UITextArea
            placeholder="Краткое описание услуги, что входит в услугу..."
          />
        </Form.Item>
        <div className="flex items-start w-full gap-6">
          <Form.Item
            label={<span className="text-base font-semibold">Цена</span>}
            name="price"
            className="w-full mb-0!"
            layout="vertical"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите цену за услугу",
              },
            ]}
          >
            <UIInputNumber
              min={0}
              precision={0}
              step={50}
              inputMode="numeric"
              suffix="₽"
              placeholder="0"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-base font-semibold">Время выполнения</span>
            }
            name="time"
            className="w-full mb-0!"
            layout="vertical"
            rules={[
              {
                required: true,
                message: "Пожалуйста, укажите время выполнения",
              },
            ]}
          >
            <TimePicker
              format="HH:mm"
              minuteStep={15}
              size="large"
              className="w-full"
              placeholder="Укажите время"
            />
          </Form.Item>
        </div>
        <Form.Item
          label={<span className="text-base font-semibold">Статус</span>}
          name="status"
          className="w-full"
          layout="vertical"
        >
          <div className="flex items-center gap-4">
            <UISwitch />
            <div className="flex flex-col">
              <span className="font-medium text-gray-700">Активна</span>
              <p className="text-xs text-gray-500">
                Услуга будет доступна для бронирования
              </p>
            </div>
          </div>
        </Form.Item>
      </Form>
    </UIModal>
  );
};
