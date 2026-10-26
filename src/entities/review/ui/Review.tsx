import { UIRate } from "../../../shared/ui/UIRate";
import carwashImg from "../assets/carwash-example.webp";

export const Review = () => {
  return (
    <div className="border border-blue-100 p-2 rounded-xl bg-white">
      <div className="flex items-stretch gap-5">
        <img
          alt="Изображение автомойки"
          src={carwashImg}
          className="rounded-lg max-w-50 h-auto"
        />
        <div className="flex flex-col gap-3 items-start w-full py-2">
          <div className="flex items-center gap-5">
            <UIRate value={5} />
            <span className="text-xs text-gray-400 font-medium">
              12 апр. 2025
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            Очень понравилось качество мойки и отношение персонала. Машину
            помыли быстро и аккуратно. Приятно, что есть запись онлайн!
          </p>
          <ul className="flex items-center gap-2 text-xs text-blue-500 font-semibold flex-wrap mt-auto">
            <li className="px-2 py-1 bg-blue-50 rounded-xl">Качество мойки</li>
            <li className="px-2 py-1 bg-blue-50 rounded-xl">
              Вежливость персонала
            </li>
            <li className="px-2 py-1 bg-blue-50 rounded-xl">
              Удобное расположение
            </li>
            {/* <li className="px-2 py-1 bg-blue-50 rounded-xl">Соотношение цены и качества</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
