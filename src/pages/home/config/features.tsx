import { BadgeCheck, Clock, Wallet } from "lucide-react";

export const FEATURES = [
  {
    name: "Быстрое бронирование",
    desc: "Всего пару кликов",
    icon: <Clock size={36} />,
  },
  {
    name: "Удобная оплата",
    desc: "Карой или через СБП",
    icon: <Wallet size={36} />,
  },
  {
    name: "Гарантия качества",
    desc: "Проверенные мойки",
    icon: <BadgeCheck size={36} />,
  },
];
