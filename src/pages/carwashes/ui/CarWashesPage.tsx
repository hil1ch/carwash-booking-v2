import { useState, type Dispatch, type SetStateAction } from "react";

import { Spin } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { useCarwashesQuery } from "../../../entities/carwash/model/queries";
import { Filters } from "../../../features/filters";
import { Search } from "../../../features/search";
import { Sort } from "../../../features/sort";
import type { IFilters } from "../../../features/filters/model/types";
import { CarwashesList } from "./CarwashesList";
import { UIPagination } from "../../../shared/ui/UIPagination";
import { usePagination } from "../../../shared/lib/usePagination";

const defaultFilters: IFilters = {
  inStock: false,
  priceRange: [0, 12000],
  carwashType: [],
};

const PAGE_SIZE = 5;

export const CarWashesPage = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const query = useCarwashesQuery();
  const { currentPage, setCurrentPage, paginatedItems, resetPage } =
    usePagination(query.data, PAGE_SIZE);

  const updateFilters: Dispatch<SetStateAction<IFilters>> = (nextFilters) => {
    setFilters(nextFilters);
    resetPage();
  };

  return (
    <div className="mx-auto flex h-[calc(100dvh-var(--header-height)-2.5rem)] w-full max-w-6xl flex-col">
      <div className="my-5 flex w-full shrink-0 items-center justify-end gap-4">
        <Search />
        <Sort placeholder="Сортировка" />
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[1fr_3fr] items-stretch gap-6">
        <Filters
          setFilters={updateFilters}
          filtersValue={filters}
          defaultFilters={defaultFilters}
        />
        <div className="flex min-h-0 flex-col">
          {query.isPending && <Spin size="large" />}
          {query.isError && (
            <div role="alert" className="flex items-center flex-col gap-3">
              <p>Не удалось загрузить автомойки: {query.error.message}</p>
              <UIButton
                onClick={() => void query.refetch()}
                disabled={query.isFetching}
              >
                Повторить
              </UIButton>
            </div>
          )}
          {query.isSuccess && query.data.length === 0 && (
            <p>Автомойки не найдены.</p>
          )}
          {query.isSuccess && query.data.length > 0 && (
            <>
              <CarwashesList carwashes={paginatedItems} />
              <UIPagination
                current={currentPage}
                total={query.data.length}
                onChange={setCurrentPage}
                pageSize={PAGE_SIZE}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
