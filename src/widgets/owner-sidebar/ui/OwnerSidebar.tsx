import { UISidebar } from "../../../shared/ui/UISidebar";
import { NavLink } from "react-router";
import { ROUTER_PATHS } from "../../../shared/constants";
import { Star, ShowerHead, Timer, Table, LayoutDashboard } from "lucide-react";

const ownerSidebarLinks = [
  {
    label: "Дашборд",
    to: ROUTER_PATHS.DASHBOARD,
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Моя автомойка",
    to: ROUTER_PATHS.OWNER_CARWASH,
    icon: <ShowerHead size={20} />,
  },
  {
    label: "Бронирования",
    to: ROUTER_PATHS.BOOKINGS,
    icon: <Table size={20} />,
  },
  {
    label: "Расписание",
    to: ROUTER_PATHS.SCHEDULE,
    icon: <Timer size={20} />,
  },
  {
    label: "Отзывы",
    to: ROUTER_PATHS.OWNER_REVIEWS,
    icon: <Star size={20} />,
  },
] as const;

export const OwnerSidebar = () => {
  const sidebarLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-3 transition-colors text-left font-medium flex items-center gap-4 ${
      isActive
        ? "bg-blue-50 font-semibold text-blue-600"
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <UISidebar>
      {ownerSidebarLinks.map(({ label, to, icon }) => (
        <NavLink key={to} to={to} className={sidebarLinkClassName}>
          {icon}
          {label}
        </NavLink>
      ))}
    </UISidebar>
  );
};
