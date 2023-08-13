import { Clipboard, Plus } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../Button";

export function TodoContainer() {
  return (
    <div className="w-full max-w-4xl bg-white shadow-xl p-6 py-8 rounded-md dark:bg-slate-800">
      <div className="flex gap-2">
        <Input leftIcon={Clipboard} placeholder="Fazer café" />
        <Button variants="icon">
          <Plus />
        </Button>
      </div>
      <div className="bg-zinc-200 block w-full my-4 h-[1px] dark:bg-slate-700" />
    </div>
  );
}
