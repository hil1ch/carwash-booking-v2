import { ApiError } from "../../../shared/api";
import type { Session, SignInCredentials, UserRole } from "../model/types";

const SESSION_STORAGE_KEY = "washnow.demo.userId";

type DemoAccount = {
  user: Session;
  password: string;
};

const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    user: {
      id: "user-1",
      userId: "user-1",
      name: "Иван Петров",
      email: "client@example.com",
      role: "user",
    },
    password: "ClientDemo123!",
  },
  {
    user: {
      id: "owner-1",
      userId: "owner-1",
      ownerId: "1",
      name: "Александр Морозов",
      email: "owner@example.com",
      role: "owner",
    },
    password: "OwnerDemo123!",
  },
];

export const DEMO_ACCOUNT_CREDENTIALS = {
  client: {
    email: "client@example.com",
    password: "ClientDemo123!",
  },
  owner: {
    email: "owner@example.com",
    password: "OwnerDemo123!",
  },
} as const;

const readStoredUser = (): Session | null => {
  let userId: string | null;
  try {
    userId = window.localStorage.getItem(SESSION_STORAGE_KEY);
  } catch {
    throw new ApiError("Не удалось прочитать демо-сессию из localStorage", 500);
  }

  if (!userId) return null;

  const account = DEMO_ACCOUNTS.find(({ user }) => user.userId === userId);
  if (!account) {
    throw new ApiError(
      "Сохранённая демо-сессия не распознана. Очистите данные сайта и войдите снова.",
      500,
    );
  }

  return account.user;
};

export const signIn = async (
  credentials: SignInCredentials,
  expectedRole: UserRole,
): Promise<{ user: Session }> => {
  const email = credentials.email.trim().toLowerCase();
  const account = DEMO_ACCOUNTS.find(
    ({ user, password }) =>
      user.email === email &&
      password === credentials.password &&
      user.role === expectedRole,
  );

  if (!account) {
    throw new ApiError("Неверный email, пароль или тип аккаунта", 401);
  }

  try {
    window.localStorage.setItem(SESSION_STORAGE_KEY, account.user.userId);
  } catch {
    throw new ApiError("Не удалось сохранить демо-сессию в localStorage", 500);
  }

  return { user: account.user };
};

export const getCurrentSession = async (): Promise<Session | null> =>
  readStoredUser();

export const signOut = async (): Promise<void> => {
  try {
    window.localStorage.removeItem(SESSION_STORAGE_KEY);
  } catch {
    throw new ApiError("Не удалось завершить демо-сессию", 500);
  }
};
