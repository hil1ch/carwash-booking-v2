// import type {
//   AuthSession,
//   RegistrationData,
//   Session,
//   SignInCredentials,
//   UserRole,
// } from "../model/types";
// import { ApiError, apiRequest } from "../../../shared/api";

// let accessToken: string | null = null;
// let refreshRequest: Promise<string> | null = null;

// type RequestOptions = {
//   authenticated?: boolean;
//   retryAfterRefresh?: boolean;
// };

// const isRecord = (value: unknown): value is Record<string, unknown> =>
//   typeof value === "object" && value !== null;

// const request = async <T>(
//   path: string,
//   init: RequestInit = {},
//   options: RequestOptions = {},
// ): Promise<T> => {
//   const headers = new Headers(init.headers);
//   if (options.authenticated && accessToken) {
//     headers.set("Authorization", `Bearer ${accessToken}`);
//   }

//   try {
//     return await apiRequest<T>(path, { ...init, headers });
//   } catch (error) {
//     if (
//       error instanceof ApiError &&
//       error.status === 401 &&
//       options.authenticated &&
//       options.retryAfterRefresh
//     ) {
//       await refreshAccessToken();
//       return request<T>(path, init, {
//         ...options,
//         retryAfterRefresh: false,
//       });
//     }
//     throw error;
//   }
// };

// const parseSession = (value: unknown): Session => {
//   if (
//     !isRecord(value) ||
//     (value.role !== "user" && value.role !== "owner") ||
//     (typeof value.id !== "string" && typeof value.id !== "number") ||
//     (typeof value.userId !== "string" && typeof value.userId !== "number") ||
//     typeof value.name !== "string" ||
//     typeof value.email !== "string"
//   ) {
//     throw new ApiError("Сервер вернул некорректные данные пользователя", 502);
//   }

//   return {
//     id: String(value.id),
//     userId: String(value.userId),
//     name: value.name,
//     email: value.email,
//     role: value.role,
//   };
// };

// const parseAuthSession = (value: unknown): AuthSession => {
//   if (
//     !isRecord(value) ||
//     typeof value.accessToken !== "string" ||
//     !value.accessToken ||
//     !("user" in value)
//   ) {
//     throw new ApiError("Сервер вернул некорректные данные сессии", 502);
//   }

//   return {
//     accessToken: value.accessToken,
//     user: parseSession(value.user),
//   };
// };

// const refreshAccessToken = async (): Promise<string> => {
//   if (!refreshRequest) {
//     refreshRequest = request<unknown>("/auth/refresh", {
//       method: "POST",
//     })
//       .then((response) => {
//         const refreshedToken =
//           isRecord(response) && typeof response.accessToken === "string"
//             ? response.accessToken
//             : "";
//         if (!refreshedToken) {
//           throw new ApiError("Сервер не вернул access token", 502);
//         }
//         accessToken = refreshedToken;
//         return refreshedToken;
//       })
//       .catch((error: unknown) => {
//         accessToken = null;
//         throw error;
//       })
//       .finally(() => {
//         refreshRequest = null;
//       });
//   }

//   return refreshRequest;
// };

// export const signIn = async (
//   credentials: SignInCredentials,
//   expectedRole: UserRole,
// ): Promise<AuthSession> => {
//   const session = parseAuthSession(
//     await request<unknown>("/auth/login", {
//       method: "POST",
//       body: JSON.stringify(credentials),
//     }),
//   );

//   if (session.user.role !== expectedRole) {
//     throw new ApiError(
//       "Учетная запись не соответствует выбранному типу входа",
//       403,
//     );
//   }

//   accessToken = session.accessToken;
//   return session;
// };

// export const signUp = async (registration: RegistrationData): Promise<AuthSession> => {
//   const session = parseAuthSession(
//     await request<unknown>("/auth/register", {
//       method: "POST",
//       body: JSON.stringify(registration),
//     }),
//   );

//   if (session.user.role !== registration.role) {
//     throw new ApiError(
//       "Сервер вернул учетную запись с неожиданной ролью",
//       502,
//     );
//   }

//   accessToken = session.accessToken;
//   return session;
// };

// export const getCurrentSession = async (): Promise<Session | null> => {
//   if (!accessToken) {
//     try {
//       await refreshAccessToken();
//     } catch (error) {
//       if (error instanceof ApiError && error.status === 401) return null;
//       throw error;
//     }
//   }

//   try {
//     const result = await request<unknown>(
//       "/auth/me",
//       { method: "GET" },
//       { authenticated: true, retryAfterRefresh: true },
//     );
//     const session = isRecord(result) && "user" in result ? result.user : result;
//     return parseSession(session);
//   } catch (error) {
//     if (error instanceof ApiError && error.status === 401) return null;
//     throw error;
//   }
// };

// export const signOut = async (): Promise<void> => {
//   try {
//     await request<unknown>("/auth/logout", { method: "POST" });
//   } finally {
//     accessToken = null;
//   }
// };

// export const clearAccessToken = (): void => {
//   accessToken = null;
// };
