import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export const POST = async (request: Request) => {
  const user = await prisma.developer.create({
    data: {
      name: 'EverGreen CarbonScape',
      country: 'Germany',
      image: 'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg',
      pricePerTon: 650,
      offeredVolumeInTons: 15,
      distributionWeight: 1,
      supplierName: 'Klom',
      earliestDelivery: new Date('2023-09-01'),
      description: 'The "EverGreen CarbonScape" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.'
    }
  })
  return NextResponse.json(user, { status: 201 })
}

export const GET = async () => {
  const developers = await prisma.developer.findMany()
  return NextResponse.json({ developers })
}

export const PUT = async (request: Request) => {
  await prisma.developer.update({
    where: { id: 1 },
    data: { 
      country: 'Italy'
    }
  })
  return new Response(null, { status: 204 })
}

export const DELETE = async (request: Request) => {
  await prisma.developer.delete({
    where: { id: 3 }
  })
  return new Response(null, { status: 204 })
}