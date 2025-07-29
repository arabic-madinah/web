import { keepPreviousData, useQuery } from "@tanstack/react-query";
import * as provider from "@mdx-js/react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { type ComponentType, useMemo } from "react";

export default function useRenderMdx(content: string) {
  const query = useQuery({
    queryKey: ["renderMdx", content],
    queryFn: async (): Promise<ComponentType> => {
      const result = await evaluate(content, {
        ...provider,
        ...runtime,
      });

      return result.default as ComponentType;
    },
    staleTime: Infinity, // or use your own caching strategy
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  // Fallback error component
  const ErrorComponent = useMemo(
    () => () => <div className="text-red-500">Error rendering MDX</div>,
    [],
  );

  return {
    Component: query.data ?? ErrorComponent,
    ...query,
  };
}
