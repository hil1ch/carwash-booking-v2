import { Alert, Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UIButton } from "../../../shared/ui/UIButton";
import { useSignUp } from "../model/useSignUp";
import { SessionApiError } from "../../../entities/session";
import {
  emailRules,
  passwordConfirmationRule,
  passwordRules,
  personNameRules,
  phoneRules,
} from "../model/validation";
import { trimValue } from "../../../shared/lib/normalize";

type ClientFormValues = {
  name: string;
  lastname: string;
  email: string;
  tel: string;
  password: string;
  passwordConfirmation: string;
};

export const SignUpClientForm = () => {
  const [form] = Form.useForm<ClientFormValues>();
  const signUpMutation = useSignUp("client");

  return (
    <Form
      form={form}
      className="w-full text-left"
      size="large"
      layout="vertical"
      noValidate
      onFinish={(values: ClientFormValues) =>
        signUpMutation.mutate({
          role: "user",
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          tel: values.tel,
          password: values.password,
        })
      }
    >
      {signUpMutation.error && (
        <Alert
          className="mb-4"
          type="error"
          showIcon
          message={signUpMutation.error.message}
          description={
            signUpMutation.error instanceof SessionApiError
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
        normalize={trimValue}
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
