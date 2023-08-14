import { PropsWithChildren } from "react";

interface TodoDescriptionProps extends PropsWithChildren {
  throughed?: boolean;
}

export function TodoDescription({
  throughed = false,
  children,
}: TodoDescriptionProps) {
  return (
    <p
      data-stroked={throughed}
      className="dark:text-white font-medium data-[stroked=true]:line-through"
    >
      {children}
    </p>
  );
}
