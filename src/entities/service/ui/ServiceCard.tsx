import { UIButton } from "../../../shared/ui/UIButton";

export const ServiceCard = () => {
  return (
    <div className="border border-blue-100 p-2 rounded-xl bg-white w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Мойка кузова + салон</h4>
          <span>
            от <strong>1200 Р</strong>
          </span>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-400 font-semibold">
          <p>Мойка кузова, уборка салона, пылесос</p>
          <span>~1ч 30мин</span>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <UIButton>Выбрать</UIButton>
      </div>
    </div>
  );
};
