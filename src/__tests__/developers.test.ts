import { PrismaClient } from "@prisma/client"
import axios from "axios"

import data from "./datasource.json"

const API_URL = 'http://127.0.0.1:3000'
const prisma = new PrismaClient()

beforeAll(async () => {
  await prisma.developer.deleteMany()

  data.forEach(async (d) => await prisma.developer.create({ data: d }))
})

describe('/api/developers/[id]', () => {
  test('it should return a message indicating that the developer was found', async () => {
    const res = await axios.get(`${API_URL}/api/developers/1/`)
    expect(res.status).toBe(200)
  })
})