import { type FC } from "react";
import { Link } from "@tanstack/react-router";
import PrimaryButton from "../components/PrimaryButton.tsx";
import {
  BookA,
  BookOpenCheck,
  MenuIcon,
  TableOfContents,
  User,
} from "lucide-react";

interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
  isSidebarOpen: boolean;
}

const Header: FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="bg-neutral-700 border-b border-slate-600 p-4 sticky top-0 z-10">
      <div className={"flex justify-between items-center"}>
        <div>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-sky-100 hidden md:block">
            Madinah Arabic
          </h1>
        </div>

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
  );
};

export default Header;
