import { Avatar } from "antd";
import { UserRound } from "lucide-react";
import { UIRate } from "../../../shared/ui/UIRate";
import carwashImg from "../assets/carwash-example.webp";

type ReviewProps = {
  authorDisplay?: "user" | "carwash";
};

export const Review = ({ authorDisplay = "carwash" }: ReviewProps) => {
  const isUserReview = authorDisplay === "user";

  return (
    <article className="rounded-xl border border-blue-100 bg-white p-4">
      <div className="flex flex-col gap-3">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            {isUserReview ? (
              <Avatar
                size={44}
                icon={<UserRound size={23} />}
                className="shrink-0 bg-blue-50 text-blue-600"
              />
            ) : (
              <img
                alt="Изображение автомойки"
                src={carwashImg}
                className="size-11 shrink-0 rounded-lg object-cover"
              />
            )}
            <span className="truncate text-sm font-semibold">
              {isUserReview ? "Илья Панарин" : "AquaCar"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <UIRate value={5} disabled />
            <time className="text-xs font-medium text-slate-400">
              12 апр. 2025
            </time>
          </div>
        </header>

        <p className="text-sm leading-6 text-slate-600">
          Очень понравилось качество мойки и отношение персонала. Машину помыли
          быстро и аккуратно. Приятно, что есть запись онлайн!
        </p>

        <ul className="flex flex-wrap gap-2">
          <li className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Качество мойки
          </li>
          <li className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Вежливость персонала
          </li>
          <li className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Удобное расположение
          </li>
        </ul>
      </div>
    </article>
  );
};
