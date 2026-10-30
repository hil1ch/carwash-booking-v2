import { UIButton } from "../../../shared/ui/UIButton";
import pageFailImg from "../assets/carwash404.svg";

export const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh">
      <img alt="Страница 404" src={pageFailImg} className="h-auto max-w-88" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Страница не найдена</h1>
        <p className="text-gray-500 max-w-lg text-center">
          Кажется, вы попали не туда. Возможно, страница была удалена,
          переименована или временно недоступна.
        </p>
        <UIButton isLink href="" className="self-center">
          Вернуться на главную
        </UIButton>
      </div>
    </main>
  );
};
