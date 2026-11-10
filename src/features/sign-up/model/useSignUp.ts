// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router";
// import {
//   SESSION_QUERY_KEY,
//   signUp,
//   type RegistrationData,
// } from "../../../entities/session";

// export const useSignUp = (role: "client" | "owner") => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   return useMutation({
//     mutationFn: (registration: RegistrationData) => signUp(registration),
//     onSuccess: ({ user }) => {
//       queryClient.setQueryData(SESSION_QUERY_KEY, user);
//       navigate(role === "owner" ? "/owner/dashboard" : "/carwashes", {
//         replace: true,
//       });
//     },
//   });
// };
