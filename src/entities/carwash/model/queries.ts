import { useQuery } from "@tanstack/react-query";
import { getCarwashes, getCarwashById } from "../../../shared/api/generated";

export const carwashQueryKeys = {
  all: ["carwashes"] as const,
  detail: (id: number | undefined) =>
    [...carwashQueryKeys.all, "detail", id] as const,
};

export const useCarwashesQuery = () =>
  useQuery({
    queryKey: carwashQueryKeys.all,
    queryFn: ({ signal }) => getCarwashes(signal),
  });

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
