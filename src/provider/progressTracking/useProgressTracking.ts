import { useContext } from "react";
import { ProgressContext } from "@/provider/progressTracking/ProgressContext.ts";

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx)
    throw new Error("useProgress must be used within ProgressTrackingProvider");
  return ctx;
};
