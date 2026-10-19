import type { ReactNode } from "react";
import { ScrollRestoration } from "react-router";
import { Header } from "../../widgets/header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="w-full flex-1">{children}</main>
      <ScrollRestoration />
    </div>
  );
};
