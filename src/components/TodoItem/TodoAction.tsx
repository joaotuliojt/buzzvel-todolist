import { tv } from "tailwind-variants";
import { Button } from "../Button";
import { Edit, Plus, Trash } from "lucide-react";
import { ComponentProps } from "react";

const todoAction = tv({
  variants: {
    action: {
      edit: "bg-indigo-500",
      delete: "bg-red-500",
      add: "bg-green-500",
    },
  },
});

interface TodoActionProps extends ComponentProps<typeof Button> {
  action: "edit" | "delete" | "add";
}

export function TodoAction({ action }: TodoActionProps) {
  return (
    <Button variants="icon" className={todoAction({ action })}>
      {action === "add" && <Plus size={20} />}
      {action === "delete" && <Trash size={16} />}
      {action === "edit" && <Edit size={16} />}
    </Button>
  );
}
