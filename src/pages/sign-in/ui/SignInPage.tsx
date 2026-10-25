import loginImg from "../assets/washnow_login_car.webp";

import type { TabsProps } from "antd";

import { SignInForm } from "../../../features/sign-in";
import { SignUpOwnerForm } from "../../../features/sign-up";
import { UITab } from "../../../shared/ui/UITab";

import styles from "./SignInPage.module.css";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Вход",
    children: (
      <>
        <h2 className="mr-auto text-left font-semibold text-xl my-5">
          Вход для клиента
        </h2>
        <SignInForm />
      </>
    ),
  },
  {
    key: "2",
    label: "Регистрация",
    children: (
      <>
        <h2 className="mr-auto text-left font-semibold text-xl my-5">
          Регистрация владельца автомойки
        </h2>
        <SignUpOwnerForm />
      </>
    ),
  },
];

export const SignInPage = () => {
  return (
    <div className="flex min-h-dvh w-full">
      <div className="sticky top-0 h-dvh w-1/3 shrink-0 self-start overflow-hidden">
        <img
          alt="Изображение для страницы авторизации"
          src={loginImg}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/60"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center justify-center p-6 max-w-xl mx-auto">
        <div className="w-full max-w-md">
          <UITab
            size="large"
            className={styles.authTabs}
            centered
            defaultActiveKey="1"
            items={items}
          />
        </div>
      </div>
    </div>
  );
};
