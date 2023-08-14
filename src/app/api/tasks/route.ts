import { NextResponse } from "next/server";
import { prisma } from "@/services/PrismaClient";
import { TaskSchema } from "./schemas";

const enum ORDER {
  ASC = "asc",
  DESC = "desc",
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let order = searchParams.get("order") as ORDER;
  if (!order) {
    order = ORDER.DESC;
  }

  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: order },
      include: {
        subtasks: {
          orderBy: { createdAt: "desc" },
        },
      },
    });
    return NextResponse.json({ data: tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const validation = TaskSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const data = TaskSchema.parse(body);

  const createdTask = await prisma.task.create({
    data,
  });

  return NextResponse.json(createdTask, { status: 201 });
}
