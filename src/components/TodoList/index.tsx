"use client";

import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { TodoItem } from "../TodoItem";

interface TodoListProps {
  tasks: ITask[];
}

interface ITask {
  id: string;
  description: string;
  isDone: boolean;
}

export function TodoList({ tasks }: TodoListProps) {
  const sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragOver = () => {
    console.log("Drag over");
  };

  const handleDragEnd = () => {
    console.log("Drag end");
  };

  return (
    <DndContext
      sensors={sensor}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <SortableContext items={tasks}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            description={task.description}
            finished={task.isDone}
            id={task.id}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}
