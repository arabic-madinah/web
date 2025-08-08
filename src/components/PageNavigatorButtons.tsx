import { ArrowLeft, ArrowRight } from "lucide-react";
import { type FC, useEffect } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import useGetChaptersQuery from "../queries/useGetChaptersQuery.ts";
import { useProgress } from "@/provider/progressTracking/useProgressTracking.ts";

const PageNavigatorButtons: FC = () => {
  const routerState = useRouterState();
  const navigate = useNavigate();
  const { routeMap, firstRoute, isLoading } = useGetChaptersQuery();
  const { markCompleted } = useProgress();

  const currentPageNode = routeMap[routerState.location.pathname];
  const nextRoute =
    routerState.location.pathname == "/"
      ? firstRoute?.route
      : currentPageNode?.nextRoute;
  const prevRoute = currentPageNode?.prevRoute;

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && prevRoute) {
        event.preventDefault();
        await navigate({ to: prevRoute });
      } else if (event.key === "ArrowRight" && nextRoute) {
        event.preventDefault();
        await navigate({ to: nextRoute });
      } else if (event.key === "ArrowRight" && !nextRoute) {
        event.preventDefault();
        if (currentPageNode) {
          markCompleted(currentPageNode.id);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [nextRoute, prevRoute, navigate]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center gap-2 text-xs">
      <div className={"w-1/2 flex justify-end flex-wrap"}>
        {prevRoute && (
          <Link
            to={prevRoute}
            className="py-1 px-2 bg-white/70 text-black dark:bg-gray-500/40 dark:text-white shadow-lg shadow-black/20 flex items-center justify-center backdrop-blur-sm z-20 rounded-lg overflow-hidden"
            title="Previous"
          >
            <ArrowLeft size={18} />
            {routeMap[prevRoute]?.title || ""}
          </Link>
        )}
      </div>
      <div className={"w-1/2 flex justify-start flex-wrap"}>
        {nextRoute ? (
          <Link
            to={nextRoute}
            className="py-1 px-2 bg-white/70 text-black dark:bg-gray-500/40 dark:text-white shadow-lg shadow-black/20 flex items-center justify-center backdrop-blur-sm z-20 rounded-lg overflow-hidden"
            title="Next"
          >
            {routeMap[nextRoute]?.title || ""}
            <ArrowRight size={18} />
          </Link>
        ) : (
          <button
            className="py-1 px-2 bg-white/70 text-black dark:bg-gray-500/40 dark:text-white shadow-lg shadow-black/20 flex items-center justify-center backdrop-blur-sm z-20 rounded-lg overflow-hidden"
            onClick={() => markCompleted(currentPageNode.id)}
          >
            Complete <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PageNavigatorButtons;
