import { Outlet } from "@tanstack/react-router";
import type { FC } from "react";
import SideBar from "./SideBar.tsx";
import { Button } from "@headlessui/react";
import { User } from "lucide-react";

const AppLayout: FC = () => {
  return (
    <div className="flex h-screen bg-neutral-800 text-slate-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-neutral-700 border-b border-slate-600 p-4 sticky top-0 z-10">
          <div className={"flex justify-between"}>
            <h1 className="text-lg font-semibold text-sky-100">
              Madinah Arabic
            </h1>
            <Button>
              <User />
            </Button>
          </div>
        </header>

        {/* Scrollable Main Section */}
        <main className="overflow-y-auto p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AppLayout;
