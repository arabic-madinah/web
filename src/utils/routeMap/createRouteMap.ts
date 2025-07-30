import type { PageNode } from "./PageNode.ts";
import type { Chapter } from "../../queries/useGetChaptersQuery.ts";
import type { RouteMap } from "./RouteMap.ts";

export function createRouteMap(chapters: Chapter[]): {
  routeMap: RouteMap;
  firstRoute: PageNode | null;
  lastRoute: PageNode | null;
} {
  const flatList: PageNode[] = [];

  chapters.forEach((chapter) => {
    flatList.push({
      route: `/chapters/${chapter.slug}`,
      title: chapter.title,
      slug: chapter.slug,
    });

    chapter.lessons?.forEach((lesson) => {
      flatList.push({
        route: `/lessons/${lesson.slug}`,
        title: lesson.title,
        slug: lesson.slug,
      });
    });
  });
  const firstRoute = flatList.length > 0 ? flatList[0] : null;
  const lastRoute = flatList.length > 0 ? flatList[flatList.length - 1] : null;

  const routeMap: RouteMap = {};

  flatList.forEach((item, index) => {
    routeMap[item.route] = {
      title: item.title,
      slug: item.slug,
      prevRoute: index > 0 ? flatList[index - 1].route : null,
      nextRoute: index < flatList.length - 1 ? flatList[index + 1].route : null,
    };
  });

  return { routeMap, firstRoute, lastRoute };
}
