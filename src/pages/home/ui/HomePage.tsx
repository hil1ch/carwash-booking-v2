import { UIButton } from "../../../shared/ui/UIButton";
import homePageCarImage from "../assets/washnow_homepage_car.webp";
import { FEATURES } from "../config/features";

export const HomePage = () => {
  return (
    <div className="mb-20">
      <section className="relative mb-10">
        <img
          alt="Автомобиль на автомойке"
          src={homePageCarImage}
          className="block h-[clamp(40rem,60vw,56rem)] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center bg-black/60">
          <div className="mx-auto w-full max-w-6xl text-left text-white flex flex-col gap-8">
            <h1 className="max-w-170 text-6xl font-semibold">
              Быстрая и удобная запись на автомойку
            </h1>
            <p className="max-w-137.5">
              Выберите ближайшую мойку, подходящие услуги, забронируйте время и
              оплатите онлайн
            </p>
            <div className="flex items-center gap-6">
              <UIButton isLink href="">
                Войти как клиент
              </UIButton>
              <UIButton isLink href="" type="default">
                Войти как владелец
              </UIButton>
            </div>
          </div>
        </div>
      </section>

      <ul className="flex justify-around w-full max-w-6xl mx-auto">
        {FEATURES.map((feature) => (
          <li className="flex items-center gap-4" key={feature.name}>
            <div className="rounded-full bg-blue-50 p-3">{feature.icon}</div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">{feature.name}</span>
              <span className="text-gray-500 text-sm font-medium">
                {feature.desc}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
