import type { ReactNode } from "react";
import { ScrollRestoration } from "react-router";
import { OwnerSidebar } from "../../widgets/owner-sidebar";

export const OwnerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <main className="mx-auto grid min-h-0 w-full max-w-6xl flex-1 grid-cols-[16rem_minmax(0,1fr)] items-stretch gap-8">
        <OwnerSidebar />
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
