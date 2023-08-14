import { prisma } from "@/services/PrismaClient";
import { NextResponse } from "next/server";

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
