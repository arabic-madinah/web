import type { PropsWithChildren } from "react";

export default function BlueText({ children }: PropsWithChildren) {
  return <span className={"text-blue-600"}>{children}</span>;
}
