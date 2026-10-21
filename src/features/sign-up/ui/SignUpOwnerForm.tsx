import { Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UIButton } from "../../../shared/ui/UIButton";
import { UISelect } from "../../../shared/ui/UISelect";
import { UIInputNumber } from "../../../shared/ui/UIInputNumber";
import { SELECT_TYPE_OPTIONS } from "../model/options";

export const SignUpOwnerForm = () => {
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
        label="Название компании"
        name="companyName"
        rules={[{ required: true, message: "Заполните название компании" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="text" placeholder="Введите название компании" />
      </Form.Item>
      <Form.Item
        label="ИНН / ОГРН"
        name="companyTaxOrRegistrationNumber"
        rules={[{ required: true, message: "Заполните ИНН / ОГРН" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="text" placeholder="Введите ИНН / ОГРН" />
      </Form.Item>
      <Form.Item
        label="Тип организации"
        name="type"
        rules={[{ required: true, message: "Заполните тип организации" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UISelect
          options={SELECT_TYPE_OPTIONS}
          placeholder="Выберите тип организации"
        />
      </Form.Item>
      <Form.Item
        label="Адрес автомойки"
        name="address"
        rules={[{ required: true, message: "Заполните адрес автомойки" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="text"
          placeholder="г. Екатеринбург, ул. Малышева, д. 36"
        />
      </Form.Item>
      <Form.Item
        label="Количество моек"
        name="count"
        rules={[{ required: true, message: "Заполните количетсво моек" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInputNumber
          mode="input"
          placeholder="Выберите количество моек"
          className="w-full"
          size="large"
        />
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
