import { message } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
  SESSION_QUERY_KEY,
  signOut,
  type UserRole,
} from "../../../entities/session";
import { ROUTER_PATHS } from "../../../shared/constants";

export const useSignOut = (role: UserRole) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signOut,
    onError: () => {
      message.error("Не удалось завершить сессию на сервере");
    },
    onSettled: () => {
      queryClient.setQueryData(SESSION_QUERY_KEY, null);
      navigate(
        role === "owner" ? ROUTER_PATHS.OWNER_SIGN_IN : ROUTER_PATHS.SIGN_IN,
        { replace: true },
      );
    },
  });
};
