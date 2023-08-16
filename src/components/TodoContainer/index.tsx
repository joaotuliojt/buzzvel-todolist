import { TodoItem } from "../TodoItem";
import { AddTask } from "../AddTask";

interface ITask {
  id: string;
  description: string;
  isDone: boolean;
}

async function getTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tasks`, {
    next: {
      tags: ["tasks"],
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
        {tasks.data.map((task: ITask) => (
          <TodoItem
            key={task.id}
            description={task.description}
            finished={task.isDone}
            id={task.id}
          />
        ))}
      </div>
    </div>
  );
}
