import {  Outlet } from "@tanstack/react-router";
import type {FC} from "react";
import SideBar from "./SideBar.tsx";

const AppLayout: FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-slate-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-slate-700 border-b border-slate-600 p-4 sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-sky-300">
            My Arabic Learning App
          </h1>
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
