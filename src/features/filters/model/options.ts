import type { ServiceCategory } from "../../../entities/service";
import type { WashWay } from "../../../entities/carwash/model/types";

export const WASH_WAYS_OPTIONS: { label: string; value: WashWay }[] = [
  { label: "Ручная", value: "manual" },
  { label: "Автоматическая", value: "automatic" },
  { label: "Самообслуживание", value: "self" },
];

export const CATEGORIES_OPTIONS: { label: string; value: ServiceCategory }[] = [
  { label: "Мойка кузова", value: "body" },
  { label: "Уборка салона", value: "salon" },
  { label: "Комплексная мойка", value: "complex" },
  { label: "Полировка", value: "polishing" },
  { label: "Защитные покрытия", value: "protection" },
  { label: "Мойка двигателя", value: "engine" },
];
