import { Divider, Slider } from "antd";
import { WASH_TYPE_OPTIONS } from "../model/options";
import { UIButton } from "../../../shared/ui/UIButton";
import { UICheckboxGroup } from "../../../shared/ui/UICheckboxGroup";
import { UISwitch } from "../../../shared/ui/UISwitch";

export const Filters = () => {
  return (
    <div className="flex flex-col self-start">
      <div className="flex justify-between items-center self-start w-full">
        <h3 className="font-semibold text-lg">Фильтры</h3>
        <UIButton type="text" variant="text" color="primary">
          Сбросить
        </UIButton>
      </div>

      <div className="mt-6 items-start text-left">
        <h4 className="font-semibold">Занятость</h4>
        <div className="flex mt-3 items-center justify-between">
          <span className="text-sm">Только свободные автомойки</span>
          <UISwitch
          //   value={filtersValue.inStock}
          //   onChange={handleChange}
          />
        </div>
      </div>
      <Divider />
      <div className="text-left">
        <h4 className="font-semibold">Тип мойки</h4>
        <div className="mt-3">
          <UICheckboxGroup
            options={WASH_TYPE_OPTIONS}
            className="flex flex-col gap-2"
          />
        </div>
      </div>
      <Divider />
      <div className="text-left">
        <h4 className="font-semibold">Цена</h4>

        <Slider
          keyboard
          range
          //   value={localRange}
          //   min={startDefault}
          //   max={endDefault}
          //   onChange={onChangeRange}
          //   onChangeComplete={applyRange}
        />
      </div>
    </div>
  );
};
