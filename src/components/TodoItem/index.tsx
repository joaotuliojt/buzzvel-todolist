import { Checkbox } from "../Checkbox";
import { TodoAction } from "./TodoAction";
import { TodoActions } from "./TodoActions";
import { TodoDescription } from "./TodoDescription";

export interface ITodo {
  finished: boolean;
  description: string;
  id: string;
}

interface TodoItemProps extends ITodo {
  subtasks?: ITodo[];
}

export function TodoItem({ description, finished, subtasks }: TodoItemProps) {
  return (
    <div className="border-b-2 border-zinc-200 dark:border-slate-700 flex flex-col gap-2 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox checked={finished} />
          <TodoDescription throughed={finished}>{description}</TodoDescription>
        </div>
        <TodoActions>
          <TodoAction action="add" />
          <TodoAction action="edit" />
          <TodoAction action="delete" />
        </TodoActions>
      </div>
      {subtasks && (
        <div className="pl-8 flex items-center justify-between">
          {subtasks.map((task) => (
            <>
              <div key={task.id} className="flex items-center gap-3">
                <Checkbox />
                <TodoDescription>
                  Fazer comprar no Shopping Center de Belo Horizonte
                </TodoDescription>
              </div>
              <TodoActions>
                <TodoAction action="edit" />
                <TodoAction action="delete" />
              </TodoActions>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
