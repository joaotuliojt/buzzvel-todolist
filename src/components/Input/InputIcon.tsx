import { LucideIcon } from "lucide-react";
import { createElement } from "react";

interface InputIconProps {
  icon: LucideIcon;
}

export function InputIcon({ icon }: InputIconProps) {
  return (
    <div className="text-zinc-700 flex items-center justify-center dark:text-zinc-100">
      {createElement(icon, { size: 18 })}
    </div>
  );
}
