import { NextResponse } from "next/server";
import { prisma } from "@/services/PrismaClient";

const enum ORDER {
  ASC = "asc",
  DESC = "desc",
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let order = searchParams.get("order") as ORDER;

  try {
    const tasks = await prisma.task.findMany({ orderBy: { createdAt: order } });
    return NextResponse.json({ data: tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
