import { deleteDataByAny, updateDataByAny } from "@/db/prismaCodes";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface TodoTypeParams {
  params: {
    id: string;
  };
}

export const DELETE = async (req: Request, { params }: TodoTypeParams) => {
  const { id } = params;

  if (!id) {
    return new NextResponse("Data needed", { status: 404 });
  }

  try {
    await deleteDataByAny("todo", { id });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return new NextResponse(error as string, { status: 500 });
  }
};

export async function PATCH(req: Request, { params }: TodoTypeParams) {
  const { id } = params;
  const { title } = await req.json();

  if (!id || !title) {
    return new NextResponse("Data needed", { status: 404 });
  }

  try {
    await updateDataByAny("todo", { id }, { title });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return new NextResponse(error as string, { status: 500 });
  }
}
