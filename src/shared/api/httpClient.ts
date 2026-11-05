const API_BASE_URL = (import.meta.env.VITE_API_URL ?? "/api").replace(/\/$/, "");

type ErrorPayload = {
  message?: unknown;
  errors?: unknown;
};

export class ApiError extends Error {
  readonly status: number;
  readonly fieldErrors?: Record<string, string>;

  constructor(
    message: string,
    status: number,
    fieldErrors?: Record<string, string>,
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const parseFieldErrors = (value: unknown): Record<string, string> | undefined => {
  if (!isRecord(value)) return undefined;

  const errors = Object.entries(value).flatMap(([field, messages]) => {
    const message = Array.isArray(messages) ? messages[0] : messages;
    return typeof message === "string" ? [[field, message] as const] : [];
  });

  return errors.length ? Object.fromEntries(errors) : undefined;
};

export const apiRequest = async <T>(
  path: string,
  init: RequestInit = {},
): Promise<T> => {
  const headers = new Headers(init.headers);
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers,
    credentials: "include",
  });
  const text = await response.text();
  let body: unknown;

  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch {
      throw new ApiError("Сервер вернул некорректный ответ", response.status);
    }
  }

  if (!response.ok) {
    const payload = isRecord(body) ? (body as ErrorPayload) : undefined;
    const message =
      typeof payload?.message === "string"
        ? payload.message
        : "Не удалось выполнить запрос";
    throw new ApiError(
      message,
      response.status,
      parseFieldErrors(payload?.errors),
    );
  }

  return body as T;
};
