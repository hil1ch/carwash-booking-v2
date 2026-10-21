import { Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UIButton } from "../../../shared/ui/UIButton";

export const SignInForm = () => {
  return (
    <Form
      className="w-full text-left"
      size="large"
      layout="vertical"
      noValidate
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Заполните вашу почту" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="email" placeholder="name@example.ru" />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Заполнить ваш пароль" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="password"
          placeholder="Введите ваш пароль"
        />
      </Form.Item>
      <Form.Item>
        <UIButton type="primary" htmlType="submit" className="w-full">
          Войти
        </UIButton>
      </Form.Item>
    </Form>
  );
};
