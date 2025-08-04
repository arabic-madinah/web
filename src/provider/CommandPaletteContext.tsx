import { createContext } from "react";

interface CommandPaletteContext {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CommandPaletteContext = createContext<CommandPaletteContext>({
  open: false,
  setOpen: () => {},
});
