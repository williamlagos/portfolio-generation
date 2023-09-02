import { distributeTonnage } from "./distribute"

import data from "../../../__tests__/datasource.json"

describe('portfolio generation testing', () => {
  test('it should receive a proper distribution', () => {
    const sampleData = data.map(d => ({ ...d, earliestDelivery: new Date(d.earliestDelivery)})).slice(0, 2)
    
    const result = distributeTonnage(20, sampleData)
    const r1 = result.portfolio.map(r => ({ id: r.dev.id, credits: r.credits}))
    const r2 = [{ id: 1, credits: 15 }, { id: 2, credits: 5 }]

    expect(
      Array.isArray(r1) && Array.isArray(r2) && 
      r1.length === r2.length && 
      r1.every((v, i) => v === r2[i])
    )
    expect(result.balance).toBe(0)
  })
})
