"use client";
import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { CheckboxProps as CheckboxRadixProps } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { Label } from "./Label";

interface CheckboxProps extends CheckboxRadixProps {
  label?: string;
}

export function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2">
      <CheckboxRadix.Root
        className="shadow-blackA7 hover:bg-violet3 flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border-2 bg-white shadow-sm outline-none focus:shadow-[0_0_0_2px_black]"
        {...rest}
      >
        <CheckboxRadix.Indicator className="text-green-500">
          <Check strokeWidth={3} size={16} />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label && <Label text={label}></Label>}
    </label>
  );
}
