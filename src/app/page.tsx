import { TodoContainer } from "@/components/TodoContainer";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h2 className="text-center text-5xl text-slate-900 font-semibold mb-16 dark:text-white">
        Buzzvel Todolist
      </h2>
      <TodoContainer />
    </div>
  );
}
