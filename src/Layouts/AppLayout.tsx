import { Outlet } from "@tanstack/react-router";
import { type FC, useState } from "react";
import SideBar from "./SideBar.tsx";
import PageNavigatorButtons from "../components/PageNavigatorButtons.tsx";
import Header from "./Header.tsx";
import CommandPaletteProvider from "@/provider/CommandPaletteProvider.tsx";

const AppLayout: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <CommandPaletteProvider>
      <div className="flex h-screen bg-neutral-800 text-slate-100">
        {/* Sidebar */}
        <SideBar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <Header
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />

          {/* Scrollable Main Section */}
          <main className="overflow-y-auto p-6 flex-1">
            <Outlet />

            <PageNavigatorButtons />
          </main>
        </div>
      </div>
    </CommandPaletteProvider>
  );
};
export default AppLayout;
