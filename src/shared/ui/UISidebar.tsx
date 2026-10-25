import type { ReactNode } from "react";

import { CircleUser, LogOut } from "lucide-react";
import { UIButton } from "./UIButton";

type UISidebarProps = {
  children?: ReactNode;
  name?: string;
  email?: string;
};

export const UISidebar = ({
  children,
  name = "Имя Фамилия",
  email = "example@mail.ru",
}: UISidebarProps) => {
  return (
    <aside className="sticky top-(--header-height) flex h-full flex-col overflow-y-auto border-r border-gray-200 bg-white py-5 px-4">
      <div className="flex gap-3 items-center">
        <CircleUser size={44} strokeWidth={1.25} aria-hidden="true" />
        <div className="flex flex-col items-start">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-400">{email}</span>
        </div>
      </div>
      <nav
        className="mt-10 flex flex-col"
        aria-label="Навигация боковой панели"
      >
        {children}
      </nav>
      <UIButton
        danger
        type="text"
        className="ml-3 mt-auto self-start font-medium!"
        iconStart={<LogOut className="mr-2" />}
      >
        Выйти
      </UIButton>
    </aside>
  );
};
