import { Divider } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { UISelect } from "../../../shared/ui/UISelect";
import { SELECT_OPTIONS } from "../model/options";
import { MapPinIcon, Pencil, Plus } from "lucide-react";
import carwashImg from "../assets/carwash-example.webp";
import { ServicesTable } from "./ServicesTable";

export const OwnerCarwashesPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Мои автомойки</h1>
      <p className="text-sm text-gray-500">
        Управление автомойками, услугами и ценами на них
      </p>
      <div className="flex items-center justify-between my-5">
        {/* <Sort placeholder="Выбор автомойки" /> Вернуть после добавления реальных данных */}
        <UISelect
          size="large"
          options={SELECT_OPTIONS}
          className="w-55 text-left"
          defaultValue={SELECT_OPTIONS[0].options[0]}
        />
        <UIButton iconStart={<Plus size={20} />}>Добавить автомойку</UIButton>
      </div>
      <div className="flex items-stretch gap-3">
        <img
          alt="Изображение автомойки"
          src={carwashImg}
          className="max-w-32 h-auto rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-base">AquaCar</span>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPinIcon size={14} />
            <span className="text-sm">г. Екатеринбург, ул. Малышева 36</span>
          </div>
          <UIButton
            type="link"
            className="self-start p-0! text-sm! mt-auto"
            iconStart={<Pencil size={14} />}
          >
            Редактировать
          </UIButton>
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Услуги</h3>
        <UIButton type="default" iconStart={<Plus size={20} />}>
          Добавить услугу
        </UIButton>
      </div>
      <ServicesTable />
    </>
  );
};
