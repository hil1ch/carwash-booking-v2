import { UICheckboxGroup } from "../../../shared/ui/UICheckboxGroup";
import { CATEGORIES_OPTIONS } from "../model/options";
import type { ServiceCategory } from "../../../entities/service";

interface ICategoriesFilterProps {
  value: ServiceCategory[];
  onChange: (value: ServiceCategory[]) => void;
}

export const CategoriesFilter = ({ value, onChange }: ICategoriesFilterProps) => (
  <section className="text-left">
    <h4 className="font-semibold">Категории услуг</h4>
    <div className="mt-3">
      <UICheckboxGroup<ServiceCategory>
        options={CATEGORIES_OPTIONS}
        className="flex flex-col gap-2"
        value={value}
        onChange={onChange}
      />
    </div>
  </section>
);
