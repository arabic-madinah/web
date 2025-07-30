import { ArrowLeft, ArrowRight } from "lucide-react";
import { type FC } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import useGetChaptersQuery from "../queries/useGetChaptersQuery.ts";

const PageNavigatorButtons: FC = () => {
  const routerState = useRouterState();
  const { routeMap, isLoading } = useGetChaptersQuery();

  const currentPageNode = routeMap[routerState.location.pathname];
  const nextRoute = currentPageNode?.nextRoute;
  const prevRoute = currentPageNode?.prevRoute;

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
        {nextRoute && (
          <Link
            to={nextRoute}
            className="py-1 px-2 bg-white/70 text-black dark:bg-gray-500/40 dark:text-white shadow-lg shadow-black/20 flex items-center justify-center backdrop-blur-sm z-20 rounded-lg overflow-hidden"
            title="Next"
          >
            {routeMap[nextRoute]?.title || ""}
            <ArrowRight size={18} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigatorButtons;
