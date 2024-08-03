import { createNewData, getAllData } from "@/db/prismaCodes";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const allTodos = await getAllData("todo");
    return NextResponse.json(allTodos, { status: 200 });
  } catch (error) {
    return new NextResponse(error as string, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  const { title } = await req.json();

  if (!title) {
    return new NextResponse("Data needed", { status: 404 });
  }

  try {
    await createNewData("todo", { title });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return new NextResponse(error as string, { status: 500 });
  }
};
