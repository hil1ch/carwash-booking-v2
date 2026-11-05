import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
  SESSION_QUERY_KEY,
  signIn,
  type SignInCredentials,
} from "../../../entities/session";

type SignInRole = "client" | "owner";

export const useSignIn = (role: SignInRole) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: SignInCredentials) =>
      signIn(credentials, role === "client" ? "user" : "owner"),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(SESSION_QUERY_KEY, user);
      navigate(role === "owner" ? "/owner/dashboard" : "/carwashes", {
        replace: true,
      });
    },
  });
};
