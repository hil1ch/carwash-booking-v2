import { Alert, Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UIButton } from "../../../shared/ui/UIButton";
import { useSignIn } from "../model/useSignIn";
import type { SignInCredentials } from "../../../entities/session";
import { ApiError } from "../../../shared/api";
import { trimValue } from "../../../shared/lib/normalize";

export const SignInForm = ({ role }: { role: "client" | "owner" }) => {
  const [form] = Form.useForm<SignInCredentials>();
  const signInMutation = useSignIn(role);

  return (
    <Form
      form={form}
      className="w-full text-left"
      size="large"
      layout="vertical"
      noValidate
      onFinish={(values) => signInMutation.mutate(values)}
    >
      {signInMutation.error && (
        <Alert
          className="mb-4"
          type="error"
          showIcon
          title={signInMutation.error.message}
          description={signInMutation.error instanceof ApiError
            ? Object.values(signInMutation.error.fieldErrors ?? {}).join(" ") || undefined
            : undefined}
        />
      )}
      <Form.Item
        label="Email"
        name="email"
        normalize={trimValue}
        rules={[
          { required: true, message: "Заполните вашу почту" },
          { type: "email", message: "Введите корректный email" },
          { max: 254, message: "Email слишком длинный" },
        ]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput type="email" autoComplete="email" placeholder="name@example.ru" />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Введите пароль" }]}
        className="[&_.ant-form-item-label]:pb-0!"
      >
        <UIInput
          type="password"
          autoComplete="current-password"
          placeholder="Введите ваш пароль"
        />
      </Form.Item>
      <Form.Item>
        <UIButton
          type="primary"
          htmlType="submit"
          loading={signInMutation.isPending}
          disabled={signInMutation.isPending}
          className="w-full"
        >
          Войти
        </UIButton>
      </Form.Item>
    </Form>
  );
};
