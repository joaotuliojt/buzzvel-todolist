import { NextResponse } from "next/server";
import { SubtaskSchema } from "./schemas";
import { prisma } from "@/services/PrismaClient";

export async function POST(req: Request) {
  const body = await req.json();

  const validation = SubtaskSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const data = SubtaskSchema.parse(body);

  const task = await prisma.task.findFirst({ where: { id: data.taskId } });

  if (!task) {
    return NextResponse.json({ error: "Task don't exists" }, { status: 404 });
  }

  const createdSubtask = await prisma.subtask.create({
    data: {
      description: data.description,
      Task: { connect: { id: data.taskId } },
    },
  });

  return NextResponse.json({ data: createdSubtask }, { status: 201 });
}
