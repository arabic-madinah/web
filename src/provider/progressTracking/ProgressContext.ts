import type { Lesson } from "@/queries/useGetChaptersQuery.ts";
import { createContext } from "react";

export type ProgressMap = Record<Lesson["id"], number>;

export interface ProgressContextType {
  progress: ProgressMap;
  markCompleted: (page: string, factor?: number) => void;
  resetProgress: () => void;
}

export const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined,
);
