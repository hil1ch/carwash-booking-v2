import { Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UIButton } from "../../../shared/ui/UIButton";

export const SignUpClientForm = () => {
  return (
    <Form
      className="w-full text-left"
      size="large"
      layout="vertical"
      noValidate
    >
      <Form.Item
        label="Имя"
        name="name"
        rules={[{ required: true, message: "Заполните ваше имя" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="text" placeholder="Введите ваше имя" />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastname"
        rules={[{ required: true, message: "Заполните вашу фамилию" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="text" placeholder="Введите вашу фамилию" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Заполните вашу почту" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="email" placeholder="name@example.ru" />
      </Form.Item>
      <Form.Item
        label="Телефон"
        name="tel"
        rules={[{ required: true, message: "Заполните ваш телефон" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="tel" placeholder="+7 912 345 67 89" />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Заполнить ваш пароль" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="password" placeholder="Введите ваш пароль" />
      </Form.Item>
      <Form.Item
        label="Подтверждение пароля"
        name="passwordConfirmation"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Повторите пароль" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("Пароли не совпадают"));
            },
          }),
        ]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="password" placeholder="Подтвердите ваш пароль" />
      </Form.Item>
      <Form.Item>
        <UIButton type="primary" htmlType="submit" className="w-full">
          Зарегистрироваться
        </UIButton>
      </Form.Item>
    </Form>
  );
};
