import { TodoItem } from "../TodoItem";
import { AddTask } from "../AddTask";

export function TodoContainer() {
  return (
    <div className="w-full max-w-4xl bg-white shadow-xl p-6 py-8 rounded-md dark:bg-slate-800">
      <AddTask />
      <div className="block w-full my-4 h-[1px]" />
      <div className="flex flex-col gap-4 min-h-[348px] max-h-[348px] overflow-y-auto pr-4">
        <TodoItem description="Hello World" finished={true} id="a" />
        <TodoItem description="Hello World" finished={true} id="a" />
        <TodoItem description="Hello World" finished={true} id="a" />
      </div>
    </div>
  );
}
