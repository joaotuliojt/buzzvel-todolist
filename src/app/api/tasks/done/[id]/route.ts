import { prisma } from "@/services/PrismaClient";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  if (!params.id) {
    NextResponse.json({ error: "Pass taskid" }, { status: 400 });
  }

  const task = await prisma.task.findFirst({ where: { id: params.id } });

  if (!task) {
    return NextResponse.json({ error: "Task don't exists" }, { status: 404 });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id: params.id },
      data: { isDone: !task.isDone },
    });
    return NextResponse.json({ data: updatedTask });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
