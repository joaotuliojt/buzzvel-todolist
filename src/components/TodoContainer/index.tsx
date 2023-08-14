import { Clipboard, Plus } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../Button";
import { TodoItem } from "../TodoItem";

export function TodoContainer() {
  return (
    <div className="w-full max-w-4xl bg-white shadow-xl p-6 py-8 rounded-md dark:bg-slate-800">
      <div className="flex gap-2">
        <Input leftIcon={Clipboard} placeholder="Fazer café" />
        <Button variants="icon">
          <Plus size={20} />
        </Button>
      </div>
      <div className="block w-full my-4 h-[1px]" />
      <div className="flex flex-col gap-4 min-h-[348px] max-h-[348px] overflow-y-auto pr-4">
        <TodoItem description="Hello World" finished={true} id="a" />
        <TodoItem description="Hello World" finished={true} id="a" />
        <TodoItem description="Hello World" finished={true} id="a" />
      </div>
    </div>
  );
}
