import { useCarwashes } from "../../../entities/carwash/model/carwashes.store";

import { ROUTER_PATHS } from "../../../shared/constants";
import { UIButton } from "../../../shared/ui/UIButton";
import headerImage from "../assets/header.png";
import { Link } from "react-router";
import { UIBadge } from "../../../shared/ui/UIBadge";

import { MENU_ITEMS } from "../config/menu-items";

export const Header = () => {
  const favoriteCount = useCarwashes(
    (state) => state.carwashes.filter((carwash) => carwash.isFavorite).length,
  );

  return (
    <header className="w-full h-(--header-height) border-b border-gray-200 sticky top-0 z-100 bg-white">
      <div className="max-w-6xl py-4 mx-auto flex items-center justify-between">
        <Link to={ROUTER_PATHS.CARWASHES} className="flex items-center gap-3">
          <img src={headerImage} alt="Логотип" width={36} />
          <span className="text-xl font-semibold">WashNow</span>
        </Link>
        <nav className="flex items-center gap-6">
          {MENU_ITEMS.map((item) => (
            <UIButton
              key={item.name}
              type="text"
              isLink
              shape="round"
              href={item.path}
              aria-label={item.name}
              className="hover:text-blue-500!"
            >
              {item.name === "Избранное" ? (
                <UIBadge count={favoriteCount} showZero={true} color="blue">
                  {item.icon}
                </UIBadge>
              ) : (
                item.icon
              )}
            </UIButton>
          ))}
        </nav>
      </div>
    </header>
  );
};
