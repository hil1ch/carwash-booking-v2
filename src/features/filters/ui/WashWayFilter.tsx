import { WASH_WAYS_OPTIONS } from "../model/options";
import { UICheckboxGroup } from "../../../shared/ui/UICheckboxGroup";

interface IWashWayFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export const WashWayFilter = ({ value, onChange }: IWashWayFilterProps) => (
  <section className="text-left">
    <h4 className="font-semibold">Способ мойки</h4>
    <div className="mt-3">
      <UICheckboxGroup
        options={WASH_WAYS_OPTIONS}
        className="flex flex-col gap-2"
        value={value}
        onChange={onChange}
      />
    </div>
  </section>
);
