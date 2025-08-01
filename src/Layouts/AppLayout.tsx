import { Link, Outlet } from "@tanstack/react-router";
import type { FC } from "react";
import SideBar from "./SideBar.tsx";
import { BookA, BookOpenCheck, TableOfContents, User } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton.tsx";
import PageNavigatorButtons from "../components/PageNavigatorButtons.tsx";

const AppLayout: FC = () => {
  return (
    <div className="flex h-screen bg-neutral-800 text-slate-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-neutral-700 border-b border-slate-600 p-4 sticky top-0 z-10">
          <div className={"flex justify-between items-center"}>
            <h1 className="text-lg font-semibold text-sky-100">
              Madinah Arabic
            </h1>
            <div className={"flex items-center space-x-2"}>
              <Link to={"/course-editor"}>
                <PrimaryButton className={"bg-transparent"}>
                  <TableOfContents />
                  Course Editor
                </PrimaryButton>
              </Link>
              <Link to={"/lessons-create"}>
                <PrimaryButton className={"bg-transparent"}>
                  <BookOpenCheck />
                  Add Lesson
                </PrimaryButton>
              </Link>
              <Link to={"/chapters-create"}>
                <PrimaryButton className={"bg-transparent"}>
                  <BookA />
                  Add Chapter
                </PrimaryButton>
              </Link>
              <PrimaryButton>
                <User size={16} />
              </PrimaryButton>
            </div>
          </div>
        </header>

        {/* Scrollable Main Section */}
        <main className="overflow-y-auto p-6 flex-1">
          <Outlet />

          <PageNavigatorButtons />
        </main>
      </div>
    </div>
  );
};
export default AppLayout;
