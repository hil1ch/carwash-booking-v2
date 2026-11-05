import type { Rule } from "antd/es/form";

export const personNameRules: Rule[] = [
  { required: true, whitespace: true, message: "Заполните поле" },
  { min: 2, max: 60, message: "Длина должна быть от 2 до 60 символов" },
  {
    pattern: /^[\p{L}][\p{L}\s'-]*$/u,
    message: "Используйте буквы, пробелы или дефис",
  },
];

export const emailRules: Rule[] = [
  { required: true, message: "Заполните вашу почту" },
  { type: "email", message: "Введите корректный email" },
  { max: 254, message: "Email слишком длинный" },
];

export const phoneRules: Rule[] = [
  { required: true, message: "Заполните ваш телефон" },
  {
    validator: async (_, value: string | undefined) => {
      if (!value) return;
      const digits = value.replace(/\D/g, "");
      const isTenDigitNumber = digits.length === 10 && digits[0] !== "0";
      const isElevenDigitNumber =
        digits.length === 11 && (digits[0] === "7" || digits[0] === "8");
      if (!isTenDigitNumber && !isElevenDigitNumber) {
        throw new Error("Введите корректный номер телефона");
      }
    },
  },
];

export const passwordRules: Rule[] = [
  { required: true, message: "Введите пароль" },
  { min: 8, max: 64, message: "Пароль должен содержать от 8 до 64 символов" },
  {
    pattern: /^(?=.*[\p{L}])(?=.*\d)\S+$/u,
    message: "Пароль должен содержать букву и цифру, без пробелов",
  },
];

export const organizationNumberRules: Rule[] = [
  { required: true, message: "Заполните ИНН / ОГРН" },
  {
    pattern: /^(?:\d{10}|\d{12}|\d{13}|\d{15})$/,
    message: "Введите ИНН или ОГРН цифрами без пробелов",
  },
];

export const passwordConfirmationRule = (getPassword: () => string) => ({
  validator: async (_: unknown, value: string | undefined) => {
    if (value && value !== getPassword()) {
      throw new Error("Пароли не совпадают");
    }
  },
});
