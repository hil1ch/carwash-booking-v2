import { UIButton } from "../../../shared/ui/UIButton";
import { ROUTER_PATHS } from "../../../shared/constants";
import homePageCarImage from "../assets/washnow_homepage_car.webp";

export const HomePage = () => {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <img
        alt="Автомобиль на автомойке"
        src={homePageCarImage}
        className="absolute inset-0 h-full w-full object-cover"
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
            <UIButton isLink href={ROUTER_PATHS.SIGN_IN}>
              Войти как клиент
            </UIButton>
            <UIButton isLink href={ROUTER_PATHS.OWNER_SIGN_IN} type="default">
              Войти как владелец
            </UIButton>
          </div>
        </div>
      </div>
    </section>
  );
};
