/**
 * @jest-environment jsdom
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import DeveloperCard from './DeveloperCard'

test('renders basic input step', () => {
  render(
    <DeveloperCard
      dev={{
        id: 1,
        name: "EverGreen CarbonScape",
        country: "Germany",
        image: "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
        pricePerTon: 650,
        offeredVolumeInTons: 15,
        distributionWeight: 1,
        supplierName: "Klom",
        earliestDelivery: new Date("2023-09-01T00:00:00.000Z"),
        description: "The \"EverGreen CarbonScape\" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation."
      }}
      credits={0}
      index={0}
    />
  )
  const textElement = screen.getByText(/Germany/i)
  expect(textElement).toBeInTheDocument()
})