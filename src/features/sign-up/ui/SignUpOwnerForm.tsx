import { Alert, Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UIButton } from "../../../shared/ui/UIButton";
import { UISelect } from "../../../shared/ui/UISelect";
import { UIInputNumber } from "../../../shared/ui/UIInputNumber";
import { SELECT_TYPE_OPTIONS } from "../model/options";
import { useSignUp } from "../model/useSignUp";
import { ApiError } from "../../../shared/api";
import {
  emailRules,
  organizationNumberRules,
  passwordConfirmationRule,
  passwordRules,
  personNameRules,
  phoneRules,
} from "../model/validation";
import { trimValue } from "../../../shared/lib/normalize";

type OwnerFormValues = {
  name: string;
  lastname: string;
  email: string;
  tel: string;
  companyName: string;
  companyTaxOrRegistrationNumber: string;
  type: "OOO" | "IP" | "AO";
  address: string;
  count: number;
  password: string;
  passwordConfirmation: string;
};

export const SignUpOwnerForm = () => {
  const [form] = Form.useForm<OwnerFormValues>();
  const signUpMutation = useSignUp("owner");

  const handleFinish = (values: OwnerFormValues) => {
    signUpMutation.mutate({
      role: "owner",
      name: values.name,
      lastname: values.lastname,
      email: values.email,
      tel: values.tel,
      password: values.password,
      companyName: values.companyName,
      companyTaxOrRegistrationNumber: values.companyTaxOrRegistrationNumber,
      type: values.type,
      address: values.address,
      count: values.count,
    });
  };

  return (
    <Form
      form={form}
      className="w-full text-left"
      size="large"
      layout="vertical"
      noValidate
      onFinish={handleFinish}
    >
      {signUpMutation.error && (
        <Alert
          className="mb-4"
          type="error"
          showIcon
          title={signUpMutation.error.message}
          description={
            signUpMutation.error instanceof ApiError
              ? Object.values(signUpMutation.error.fieldErrors ?? {}).join(
                  " ",
                ) || undefined
              : undefined
          }
        />
      )}
      <Form.Item
        label="Имя"
        name="name"
        normalize={trimValue}
        rules={personNameRules}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="text"
          autoComplete="given-name"
          maxLength={60}
          placeholder="Введите ваше имя"
        />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastname"
        normalize={trimValue}
        rules={personNameRules}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="text"
          autoComplete="family-name"
          maxLength={60}
          placeholder="Введите вашу фамилию"
        />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        normalize={trimValue}
        rules={emailRules}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="email"
          autoComplete="email"
          maxLength={254}
          placeholder="name@example.ru"
        />
      </Form.Item>
      <Form.Item
        label="Телефон"
        name="tel"
        rules={phoneRules}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="tel"
          autoComplete="tel"
          maxLength={20}
          placeholder="+7 912 345 67 89"
        />
      </Form.Item>
      <Form.Item
        label="Название компании"
        name="companyName"
        normalize={trimValue}
        rules={[
          {
            required: true,
            whitespace: true,
            message: "Заполните название компании",
          },
          {
            min: 2,
            max: 120,
            message: "Длина должна быть от 2 до 120 символов",
          },
        ]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="text"
          maxLength={120}
          placeholder="Введите название компании"
        />
      </Form.Item>
      <Form.Item
        label="ИНН / ОГРН"
        name="companyTaxOrRegistrationNumber"
        normalize={(value: string) => value?.replace(/\D/g, "")}
        rules={organizationNumberRules}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="text"
          inputMode="numeric"
          maxLength={15}
          placeholder="Введите ИНН / ОГРН"
        />
      </Form.Item>
      <Form.Item
        label="Тип организации"
        name="type"
        rules={[{ required: true, message: "Выберите тип организации" }]}
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
        normalize={trimValue}
        rules={[
          {
            required: true,
            whitespace: true,
            message: "Заполните адрес автомойки",
          },
          {
            min: 5,
            max: 200,
            message: "Длина должна быть от 5 до 200 символов",
          },
        ]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="text"
          maxLength={200}
          autoComplete="street-address"
          placeholder="г. Екатеринбург, ул. Малышева, д. 36"
        />
      </Form.Item>
      <Form.Item
        label="Количество моек"
        name="count"
        rules={[{ required: true, message: "Укажите количество моек" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInputNumber
          mode="input"
          min={1}
          max={1000}
          precision={0}
          placeholder="Укажите количество моек"
          className="w-full"
          size="large"
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={passwordRules}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="password"
          autoComplete="new-password"
          placeholder="Введите ваш пароль"
        />
      </Form.Item>
      <Form.Item
        label="Подтверждение пароля"
        name="passwordConfirmation"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Повторите пароль" },
          ({ getFieldValue }) =>
            passwordConfirmationRule(() => getFieldValue("password")),
        ]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="password"
          autoComplete="new-password"
          placeholder="Подтвердите ваш пароль"
        />
      </Form.Item>
      <Form.Item>
        <UIButton
          type="primary"
          htmlType="submit"
          loading={signUpMutation.isPending}
          disabled={signUpMutation.isPending}
          className="w-full"
        >
          Зарегистрироваться
        </UIButton>
      </Form.Item>
    </Form>
  );
};
