import React, { useState, useCallback, useEffect } from "react";
import {
  ProgressContext,
  type ProgressMap,
} from "@/provider/progressTracking/ProgressContext.ts";
import { useRouter } from "@tanstack/react-router";
import useGetChaptersQuery from "@/queries/useGetChaptersQuery.ts";

const progressKey = "my-arabic.progress";

const getStoredProgress = (): ProgressMap => {
  const stored = localStorage.getItem(progressKey);
  try {
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error("Error parsing stored progress:", error);
    return {};
  }
};

const setStoredProgress = (progress: ProgressMap): void => {
  localStorage.setItem(progressKey, JSON.stringify(progress));
};

export const ProgressTrackingProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressMap>(getStoredProgress());
  const { routeMap } = useGetChaptersQuery();
  const { subscribe } = useRouter();

  const markCompleted = useCallback((pageId: string, factor: number = 1.0) => {
    setProgress((prev) => {
      const newProgress = { ...prev, [pageId]: factor };
      setStoredProgress(newProgress);
      return newProgress;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({});
    setStoredProgress({});
  }, []);

  useEffect(() => {
    // Cleanup subscription on unmount
    return subscribe("onResolved", (event) => {
      console.log({
        event,
        routeMap,
      });

      const fromRoute = routeMap[event.fromLocation?.pathname || ""];

      if (fromRoute && fromRoute.nextRoute == event.toLocation?.pathname) {
        // If the next route is the one we are navigating to, mark it as completed
        markCompleted(fromRoute.id);
      }
    });
  }, [subscribe, routeMap, markCompleted]);

  return (
    <ProgressContext.Provider
      value={{ progress, markCompleted, resetProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
