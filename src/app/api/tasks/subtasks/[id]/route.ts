import { prisma } from "@/services/PrismaClient";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  if (!params.id) {
    NextResponse.json({ error: "Pass subtask id" }, { status: 400 });
  }

  const subtask = await prisma.subtask.findFirst({ where: { id: params.id } });

  if (!subtask) {
    return NextResponse.json(
      { error: "Subtask don't exists" },
      { status: 404 },
    );
  }

  try {
    await prisma.subtask.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Subtask deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
