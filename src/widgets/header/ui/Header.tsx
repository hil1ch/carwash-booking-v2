import { ROUTER_PATHS } from "../../../shared/constants";
import { UIButton } from "../../../shared/ui/UIButton";
import headerImage from "../header.png";
import { Link } from "react-router";

import { MENU_ITEMS } from "../config/menu-items";

export const Header = () => {
  return (
    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
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
  );
};
