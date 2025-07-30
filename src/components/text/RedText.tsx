import type { PropsWithChildren } from "react";

export default function RedText({ children }: PropsWithChildren) {
  return <span className={"text-red-600"}>{children}</span>;
}
