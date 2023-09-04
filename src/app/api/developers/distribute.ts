import { Developer } from '@/app/types'

export const distributeTonnage = (tons: number, developers: Developer[]) => {
  let tonsBalance = tons
  const portfolio = []

  // Portfolio initial generation
  for (let dev of developers) {
    if (tonsBalance === 0) break

    const requiredCapacity = dev.distributionWeight * tons
    const availableCredits = requiredCapacity > dev.offeredVolumeInTons ? dev.offeredVolumeInTons : requiredCapacity
    const credits = availableCredits > tonsBalance ? tonsBalance : availableCredits

    portfolio.push({ dev, credits })
    tonsBalance -= credits
  }

  // Check if there's remaining balance
  if (tonsBalance > 0) {
    const projectsWithCredits = portfolio.filter(p => p.dev.offeredVolumeInTons > p.credits)
    const balanceShift = Math.floor(tonsBalance / projectsWithCredits.length)

    const redistributedPortfolio = portfolio.map(p => {
      if (p.dev.offeredVolumeInTons - p.credits >= balanceShift) {
        tonsBalance -= balanceShift
        return { dev: p.dev, credits: p.credits + balanceShift}
      } else {
        return p
      }
    })

    return { portfolio: redistributedPortfolio, balance: tonsBalance }
  } else { 
    return { portfolio, balance: tonsBalance }
  }
}
