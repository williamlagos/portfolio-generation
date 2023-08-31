import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient()

export const POST = async (request: NextRequest) => {
  const data = await request.json()
  const user = await prisma.developer.create({ data })
  return NextResponse.json(user, { status: 201 })
}

export const GET = async () => {
  const developers = await prisma.developer.findMany()
  return NextResponse.json({ developers })
}