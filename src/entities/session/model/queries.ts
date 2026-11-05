import { useQuery } from "@tanstack/react-query";
import { getCurrentSession } from "../api/sessionApi";

export const SESSION_QUERY_KEY = ["session", "current"] as const;

export const useCurrentSession = () =>
  useQuery({
    queryKey: SESSION_QUERY_KEY,
    queryFn: getCurrentSession,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
