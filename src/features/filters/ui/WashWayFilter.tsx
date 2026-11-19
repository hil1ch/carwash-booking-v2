import { WASH_WAYS_OPTIONS } from "../model/options";
import { UICheckboxGroup } from "../../../shared/ui/UICheckboxGroup";
import type { WashWay } from "../../../entities/carwash/model/types";

interface IWashWayFilterProps {
  value: WashWay[];
  onChange: (value: WashWay[]) => void;
}

export const WashWayFilter = ({ value, onChange }: IWashWayFilterProps) => (
  <section className="text-left">
    <h4 className="font-semibold">Способ мойки</h4>
    <div className="mt-3">
      <UICheckboxGroup<WashWay>
        options={WASH_WAYS_OPTIONS}
        className="flex flex-col gap-2"
        value={value}
        onChange={onChange}
      />
    </div>
  </section>
);
