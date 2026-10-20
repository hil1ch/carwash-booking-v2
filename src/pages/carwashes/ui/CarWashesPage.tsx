import { CarWash } from "../../../entities/carwash";
import { Filters } from "../../../features/filters";
import { Search } from "../../../features/search";
import { Sort } from "../../../features/sort";

export const CarWashesPage = () => {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex items-center gap-4 my-5 w-full justify-end">
        <Search />
        <Sort />
      </div>
      <div className="grid grid-cols-[1fr_3fr] items-start gap-6">
        <Filters />
        <CarWash />
      </div>
    </div>
  );
};
