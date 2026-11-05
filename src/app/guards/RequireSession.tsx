import { Alert, Spin } from "antd";
import { Navigate, Outlet } from "react-router";
import {
  SessionApiError,
  useCurrentSession,
  type UserRole,
} from "../../entities/session";
import { ROUTER_PATHS } from "../../shared/constants";
import { UIButton } from "../../shared/ui/UIButton";

export const RequireSession = ({ role }: { role: UserRole }) => {
  const { data: session, error, isPending, refetch } = useCurrentSession();

  if (isPending) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <Spin size="large" tip="Проверяем сессию..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center gap-4 p-6">
        <Alert
          type="error"
          showIcon
          title="Не удалось проверить сессию"
          description={
            error instanceof SessionApiError
              ? error.message
              : "Проверьте соединение и попробуйте снова."
          }
        />
        <UIButton onClick={() => void refetch()} loading={isPending}>
          Повторить
        </UIButton>
      </div>
    );
  }

  if (!session) {
    return (
      <Navigate
        to={role === "owner" ? ROUTER_PATHS.OWNER_SIGN_IN : ROUTER_PATHS.SIGN_IN}
        replace
      />
    );
  }

  if (session.role !== role) {
    return (
      <Navigate
        to={
          session.role === "owner"
            ? ROUTER_PATHS.DASHBOARD
            : ROUTER_PATHS.CARWASHES
        }
        replace
      />
    );
  }

  return <Outlet />;
};
