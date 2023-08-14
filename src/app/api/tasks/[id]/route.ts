import { prisma } from "@/services/PrismaClient";
import { NextResponse } from "next/server";
import { TaskSchema } from "../schemas";

export async function DELETE(
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
    await prisma.task.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Task deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  if (!params.id) {
    NextResponse.json({ error: "Pass taskid" }, { status: 400 });
  }

  const body = await req.json();
  const validation = TaskSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const data = TaskSchema.parse(body);

  try {
    const editedTask = await prisma.task.update({
      where: { id: params.id },
      data,
    });

    return NextResponse.json({ data: editedTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
