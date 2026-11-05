import { UISidebar } from "../../../shared/ui/UISidebar";
import { NavLink } from "react-router";
import { ROUTER_PATHS } from "../../../shared/constants";
import { Star, Archive, Heart } from "lucide-react";
import { useCurrentSession } from "../../../entities/session";
import { useSignOut } from "../../../features/sign-out";

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
  const { data: session } = useCurrentSession();
  const signOutMutation = useSignOut("user");
  const sidebarLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-3 transition-colors text-left font-medium flex items-center gap-4 ${
      isActive
        ? "bg-blue-50 font-semibold text-blue-600"
        : "text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <UISidebar
      name={session?.name ?? ""}
      email={session?.email ?? ""}
      onSignOut={() => signOutMutation.mutate()}
      isSigningOut={signOutMutation.isPending}
    >
      {userSidebarLinks.map(({ label, to, icon }) => (
        <NavLink key={to} to={to} className={sidebarLinkClassName}>
          {icon}
          {label}
        </NavLink>
      ))}
    </UISidebar>
  );
};
