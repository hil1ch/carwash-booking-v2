import { Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";

export const ContactsForm = () => {
  return (
    <>
      <Form.Item
        name="phone"
        rules={[
          { required: true, message: "Пожалуйста, введите номер телефона" },
        ]}
        className="mb-0!"
        layout="vertical"
        label={<span className="text-base font-semibold">Телефон</span>}
      >
        <UIInput type="tel" placeholder="+7 912 345 67 89" />
      </Form.Item>
      <Form.Item
        label={<span className="text-base font-semibold">Email</span>}
        name="email"
        rules={[{ required: true, message: "Заполните вашу почту" }]}
        className="[&_.ant-form-item-label]:pb-0!"
        layout="vertical"
      >
        <UIInput type="email" placeholder="name@example.ru" />
      </Form.Item>
    </>
  );
};
