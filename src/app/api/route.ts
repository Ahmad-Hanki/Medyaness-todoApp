import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { title } = await req.json();

  if (!title) {
    return new NextResponse('Data needed', { status: 404 });
  }

  try {
    const addedTitle = await prisma.todo.create({
      data: {
        title,
      },
    });

    console.log(addedTitle.id);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse(error as string, { status: 500 });
  }
};
