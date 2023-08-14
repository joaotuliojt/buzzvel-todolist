import { tv } from "tailwind-variants";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader } from "lucide-react";

const button = tv({
  base: "flex items-center font-medium text-base justify-center h-10 bg-indigo-500 text-white rounded-md hover:brightness-75 transition-all relative",
  variants: {
    variants: {
      icon: "p-2 w-10 h-10",
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
  isLoading?: boolean;
}

export function Button({
  variants = "primary",
  children,
  className,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={isLoading}
      className={button({ variants, className })}
      {...rest}
    >
      <span data-loading={isLoading} className="data-[loading=true]:opacity-0">
        {children}
      </span>
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader className="animate-spin" />
        </div>
      )}
    </button>
  );
}
