export type RouteMap = {
  [route: string]: {
    title: string;
    slug: string;
    nextRoute?: string | null;
    prevRoute?: string | null;
  };
};
