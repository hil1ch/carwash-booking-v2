import { UIInput } from "../../../shared/ui/UIInput";

interface ISearchProps {
  searchValue: string;
  onSearch: (value: string) => void;
}

export const Search = ({ searchValue, onSearch }: ISearchProps) => {
  return (
    <div className="w-md shrink-0">
      <UIInput
        placeholder="Поиск по названию или адресу"
        type="text"
        variantStyle="search"
        className="w-full"
        value={searchValue}
        onChange={(event) => onSearch(event.currentTarget.value)}
      />
    </div>
  );
};
