import { UIInput } from "../../../shared/ui/UIInput";

export const Search = () => {
  return (
    <div className="w-md shrink-0">
      <UIInput
        placeholder="Поиск по названию или адресу"
        type="text"
        variantStyle="search"
        className="w-full"
      />
    </div>
  );
};
