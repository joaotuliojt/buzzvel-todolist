import { tv } from "tailwind-variants";
import { ButtonHTMLAttributes, ReactNode } from "react";

const button = tv({
  base: "flex items-center font-medium text-base justify-center h-10 bg-indigo-500 text-white rounded-md hover:brightness-75 transition-all",
  variants: {
    variants: {
      icon: "p-2",
      primary: "px-6",
    },
  },
  defaultVariants: {
    variants: "primary",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variants?: "icon" | "primary";
}

export function Button({
  variants = "primary",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={button({ variants, className: "font-medium" })}
      {...rest}
    >
      {children}
    </button>
  );
}
