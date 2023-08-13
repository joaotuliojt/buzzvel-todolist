import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes, forwardRef } from "react";
import { InputIcon } from "./InputIcon";
import { ErrorLabel } from "./ErrorLabel";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  errorMessage?: string;
}

export function Input({
  leftIcon,
  rightIcon,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      <label
        data-error={errorMessage ? "true" : "false"}
        className="flex appearance-none w-full bg-transparent rounded-md py-2 px-3 ring-1 ring-slate-200 shadow-sm dark:ring-slate-400 data-[error=true]:ring-red-500 data-[error=true]:dark:ring-red-500"
      >
        {leftIcon && <InputIcon icon={leftIcon} />}
        <input
          className="bg-transparent w-full block outline-none pl-2 text-sm leading-6 text-slate-900 placeholder:text-slate-400 dark:text-slate-100"
          type="text"
          {...rest}
        />
        {rightIcon && <InputIcon icon={rightIcon} />}
      </label>
      {errorMessage && <ErrorLabel message={errorMessage} />}
    </div>
  );
}
