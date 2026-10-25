import type { ReactNode } from "react";
import { ScrollRestoration } from "react-router";
import { Header } from "../../widgets/header";
import { UserSidebar } from "../../widgets/user-sidebar";

export const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <main className="mx-auto grid min-h-0 w-full max-w-6xl flex-1 grid-cols-[16rem_minmax(0,1fr)] items-stretch gap-8">
        <UserSidebar />
        <div className="h-full min-h-0">
          <section className="flex h-full min-h-0 flex-col py-5 text-left">
            {children}
          </section>
        </div>
      </main>
      <ScrollRestoration />
    </div>
  );
};
