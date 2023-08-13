import { PropsWithChildren } from "react";

export function TodoActions({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-3">{children}</div>;
}
