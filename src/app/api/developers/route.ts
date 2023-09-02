import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { distributeTonnage } from "./distribute";

import { Developer } from "@/app/types";

const prisma = new PrismaClient()

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json()
    const user = await prisma.developer.create({ data })
    return NextResponse.json(user, { status: 201 }) 
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export const GET = async (request: NextRequest) => {
  const tons = parseInt(request.nextUrl.searchParams.get('t') || '0')
  const developers = await prisma.developer.findMany()

  return tons !== 0 ? (
    NextResponse.json(distributeTonnage(tons, developers as Developer[]))
  ) : (
    NextResponse.json({ portfolio: developers, balance: 0 })
  )
}