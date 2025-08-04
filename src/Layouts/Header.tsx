import { type FC } from "react";
import PrimaryButton from "../components/PrimaryButton.tsx";
import { MenuIcon } from "lucide-react";
import { useCommandPalette } from "@/provider/commandPalette/useCommandPalette.ts";
import { CommandShortcut } from "@/components/ui/command.tsx";

interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
  isSidebarOpen: boolean;
}

const Header: FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { setOpen } = useCommandPalette();

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
          <PrimaryButton
            className={"bg-transparent"}
            onClick={() => setOpen(true)}
          >
            <CommandShortcut className={"text-gray-400"}>⌘K</CommandShortcut>
            <span>Actions</span>
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
