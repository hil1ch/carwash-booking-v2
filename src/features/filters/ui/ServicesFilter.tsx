import { UICheckboxGroup } from "../../../shared/ui/UICheckboxGroup";

interface IWashTypeFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export const ServicesFilter = ({ value, onChange }: IWashTypeFilterProps) => (
  <section className="text-left">
    <h4 className="font-semibold">Услуги</h4>
    <div className="mt-3">
      <UICheckboxGroup
        // options={WASH_TYPE_OPTIONS}
        className="flex flex-col gap-2"
        value={value}
        onChange={onChange}
      />
    </div>
  </section>
);
