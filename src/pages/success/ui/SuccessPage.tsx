import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { UIButton } from "../../../shared/ui/UIButton";
import { Timer, MapPinHouse, ShowerHead } from "lucide-react";

const successLottie = new URL("../assets/Success.lottie", import.meta.url).href;

export const SuccessPage = () => {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex flex-col gap-5 max-w-2xl w-full mx-auto">
        <DotLottieReact
          src={successLottie}
          loop
          autoplay
          className="w-80 h-auto mx-auto"
        />
        <h2 className="font-semibold text-2xl">Бронирование подтверждено!</h2>
        <p className="text-gray-500 text-sm">
          Ваша запись на автомойку успешно создана. Проверьте детали в личном
          кабинете.
        </p>
        <div className="border border-blue-100 p-5 rounded-xl bg-gray-50">
          <div className="flex flex-col gap-3 items-start text-gray-500 font-medium text-sm">
            <span className="font-semibold text-lg text-black">AquaCar</span>
            <div className="flex items-center gap-3">
              <ShowerHead size={20} />
              <span>Мойка кузова + салон</span>
            </div>
            <div className="flex items-center gap-3">
              <Timer size={20} />
              <span>12 октября, 12:30</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPinHouse size={20} />
              <span>ул. Ленина 32</span>
            </div>
            <span className="font-semibold text-lg self-end text-black">
              1 200 Р
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <UIButton isLink href="">
            Перейти в личный кабинет
          </UIButton>
          <UIButton isLink href="" type="default">
            К списку автомоек
          </UIButton>
        </div>
      </div>
    </div>
  );
};
