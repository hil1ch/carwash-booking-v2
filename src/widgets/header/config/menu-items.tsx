import { User, Heart } from "lucide-react";
import { ROUTER_PATHS } from "../../../shared/constants";

export const MENU_ITEMS = [
  { name: "Избранное", path: ROUTER_PATHS.FAVORITE, icon: <Heart /> },
  { name: "Войти", path: ROUTER_PATHS.SIGN_IN, icon: <User /> },
];