import { useMemo, useState } from "react";

export const usePagination = <T,>(items: T[] | undefined, pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return items?.slice(start, start + pageSize);
  }, [items, currentPage, pageSize]);

  const resetPage = () => setCurrentPage(1);

  return { currentPage, setCurrentPage, paginatedItems, resetPage };
};
