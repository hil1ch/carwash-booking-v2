import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCarwashes, getCarwashById } from "../../../shared/api/generated";
import { useCarwashes } from "./carwashes.store";

export const carwashQueryKeys = {
  all: ["carwashes"] as const,
  detail: (id: number | undefined) =>
    [...carwashQueryKeys.all, "detail", id] as const,
};

export const useCarwashesQuery = () => {
  const setCarwashes = useCarwashes((state) => state.setCarwashes);
  const query = useQuery({
    queryKey: carwashQueryKeys.all,
    queryFn: ({ signal }) => getCarwashes(signal),
  });

  useEffect(() => {
    if (query.data) {
      setCarwashes(query.data);
    }
  }, [query.data, setCarwashes]);

  return query;
};

export const useCarwashQuery = (id: number | undefined) =>
  useQuery({
    queryKey: carwashQueryKeys.detail(id),
    queryFn: ({ signal }) => {
      if (id === undefined) {
        throw new Error("Не указан идентификатор автомойки");
      }

      return getCarwashById(id, signal);
    },
    enabled: id !== undefined,
  });
