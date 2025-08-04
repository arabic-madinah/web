import { LoginDialogContext } from "@/provider/loginDialog/LoginDialogContext.tsx";
import { useContext } from "react";

export const useLoginDialog = () => {
  const context = useContext(LoginDialogContext);
  if (!context) {
    throw new Error("useLoginDialog must be used within a LoginDialogProvider");
  }
  return context;
};
