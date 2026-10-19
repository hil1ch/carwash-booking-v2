import { ROUTER_PATHS } from "../../../shared/constants";
import { UIButton } from "../../../shared/ui/UIButton";
import headerImage from "../assets/header.png";
import { Link } from "react-router";

import { MENU_ITEMS } from "../config/menu-items";

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 sticky top-0 z-100 bg-white">
      <div className="max-w-6xl py-4 mx-auto flex items-center justify-between">
        <Link to={ROUTER_PATHS.HOME} className="flex items-center gap-3">
          <img src={headerImage} alt="Логотип" width={36} />
          <span className="text-xl font-semibold">WashNow</span>
        </Link>
        <nav className="flex items-center">
          {MENU_ITEMS.map((item) => (
            <UIButton
              key={item.name}
              type="default"
              isLink
              shape="round"
              href={item.path}
              aria-label={item.name}
            >
              {item.icon}
            </UIButton>
          ))}
        </nav>
      </div>
    </header>
  );
};
