export type RouteMap = {
  [route: string]: {
    id: string;
    type: "chapter" | "lesson";
    title: string;
    slug: string;
    nextRoute?: string | null;
    prevRoute?: string | null;
  };
};
