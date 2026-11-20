import type { DateOption } from "../model/types";

export const createDateOptions = (count: number): DateOption[] => {
  const today = new Date();
  const weekdayFormatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
  });
  const monthFormatter = new Intl.DateTimeFormat("ru-RU", { month: "short" });

  return Array.from({ length: count }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);

    const value = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");

    return {
      value,
      title:
        index === 0
          ? "Сегодня"
          : weekdayFormatter
              .format(date)
              .replace(/\.$/, "")
              .replace(/^\p{L}/u, (letter) => letter.toLocaleUpperCase("ru-RU")),
      day: date.getDate(),
      month: monthFormatter.format(date).replace(/\.$/, ""),
    };
  });
};