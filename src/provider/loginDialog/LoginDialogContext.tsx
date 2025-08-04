import { createContext } from "react";

interface LoginDialogContext {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const LoginDialogContext = createContext<LoginDialogContext>({
  open: false,
  setOpen: () => {},
});
