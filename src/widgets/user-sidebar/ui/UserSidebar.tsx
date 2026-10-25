import { UISidebar } from "../../../shared/ui/UISidebar";
import { NavLink } from "react-router";
import { ROUTER_PATHS } from "../../../shared/constants";
import { Star, Archive, Heart } from "lucide-react";

const userSidebarLinks = [
  {
    label: "Мои записи",
    to: ROUTER_PATHS.USER,
    icon: <Archive size={20} />,
  },
  { label: "Избранное", to: ROUTER_PATHS.FAVORITE, icon: <Heart size={20} /> },
  { label: "Отзывы", to: ROUTER_PATHS.USER_REVIEWS, icon: <Star size={20} /> },
] as const;

export const UserSidebar = () => {
  const sidebarLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-3 transition-colors text-left font-medium flex items-center gap-4 ${
      isActive
        ? "bg-blue-50 font-semibold text-blue-600"
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <UISidebar>
      {userSidebarLinks.map(({ label, to, icon }) => (
        <NavLink key={to} to={to} className={sidebarLinkClassName}>
          {icon}
          {label}
        </NavLink>
      ))}
    </UISidebar>
  );
};
