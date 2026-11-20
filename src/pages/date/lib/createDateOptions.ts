import type { DateOption } from "../ui/DateSelector";

export const createDateOptions = (count: number): DateOption[] => {
  const today = new Date();

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
          : new Intl.DateTimeFormat("ru-RU", { weekday: "short" })
              .format(date)
              .replace(/\.$/, "")
              .replace(/^\p{L}/u, (letter) =>
                letter.toLocaleUpperCase("ru-RU"),
              ),
      day: date.getDate(),
      month: new Intl.DateTimeFormat("ru-RU", { month: "short" })
        .format(date)
        .replace(/\.$/, ""),
    };
  });
};