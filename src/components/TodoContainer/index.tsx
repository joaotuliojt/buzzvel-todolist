import { TodoItem } from "../TodoItem";
import { AddTask } from "../AddTask";
import { DndContext } from "@dnd-kit/core";
import { TodoList } from "../TodoList";

async function getTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tasks`, {
    next: {
      tags: ["tasks"],
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
}

export async function TodoContainer() {
  const tasks = await getTasks();

  return (
    <div className="w-full max-w-4xl bg-white shadow-xl p-6 py-8 rounded-md dark:bg-slate-800">
      <AddTask />
      <div className="block w-full my-4 h-[1px]" />
      <div className="flex flex-col gap-4 min-h-[348px] max-h-[348px] overflow-y-auto pr-4">
        <TodoList tasks={tasks.data} />
      </div>
    </div>
  );
}
