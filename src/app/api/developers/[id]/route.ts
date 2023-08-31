import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient()

export const GET = async (_: NextRequest, context: { params: { id: string } }) => {
  const developers = await prisma.developer.findUniqueOrThrow({ 
    where: { id: parseInt(context.params.id) }
  })
  return NextResponse.json({ developers })
}

export const PUT = async (request: NextRequest, context: { params: { id: string } }) => {
  const data = await request.json()
  await prisma.developer.update({
    where: { id: parseInt(context.params.id) },
    data
  })
  return new Response(null, { status: 204 })
}

export const DELETE = async (_: NextRequest, context: { params: { id: string } }) => {
  await prisma.developer.delete({
    where: { id: parseInt(context.params.id) }
  })
  return new Response(null, { status: 204 })
}