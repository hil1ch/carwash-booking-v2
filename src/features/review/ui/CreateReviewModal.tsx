import { UIModal } from "../../../shared/ui/UIModal";
import carwashImg from "../assets/carwash-example.webp";
import { MapPinIcon } from "lucide-react";
import { UIRate } from "../../../shared/ui/UIRate";
import { Divider, Form, Input } from "antd";
import { UICheckboxGroup } from "../../../shared/ui/UICheckboxGroup";

export const CreateReviewModal = () => {
  return (
    <UIModal
      isModalOpen={false}
      title="Оставить отзыв"
      okText="Отправить отзыв"
      okButtonClassName="w-full"
    >
      <div className="flex items-start gap-3 mt-8">
        <img
          alt="Изображение автомойки"
          src={carwashImg}
          className="rounded-md h-auto max-w-24"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-base">AquaCar</span>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPinIcon size={14} />
            <span className="text-sm">г. Екатеринбург, ул. Малышева 36</span>
          </div>
        </div>
      </div>
      <Divider />
      <Form className="flex flex-col gap-7" noValidate>
        <Form.Item
          name="rating"
          rules={[{ required: true, message: "Пожалуйста, поставьте оценку!" }]}
          className="mb-0!"
          layout="vertical"
          label={<span className="text-base font-semibold">Ваша оценка</span>}
          extra="Поставьте оценку от 1 до 5 звезд"
        >
          <UIRate size="large" />
        </Form.Item>
        {/* <p className="text-gray-500 text-xs">
            
          </p> */}
        <Form.Item
          label={<span className="text-base font-semibold">Комментарий</span>}
          name="comment"
          className="w-full mb-0!"
          layout="vertical"
        >
          <Input.TextArea
            placeholder="Поделитесь своими впечатлениями..."
            showCount
            maxLength={500}
            autoSize={{ minRows: 4, maxRows: 6 }}
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="text-base font-semibold">
              Достоинства{" "}
              <span className="text-gray-500 font-normal text-sm">
                (необязательно)
              </span>
            </span>
          }
          name="advantages"
          className="w-full"
          layout="vertical"
        >
          <UICheckboxGroup
            className="flex flex-col gap-1.5"
            options={[
              "Качество мойки",
              "Вежливость персонала",
              "Удобное расположение",
              "Соотношение цены и качества",
            ]}
          />
        </Form.Item>
      </Form>
    </UIModal>
  );
};
