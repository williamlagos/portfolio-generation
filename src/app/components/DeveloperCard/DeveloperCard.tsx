import { Card, CardMedia, CardContent, Typography } from '@mui/material'

import { Developer } from '@/app/types'

export interface DeveloperCardProps {
  dev: Developer
  credits: number
}

const DeveloperCard = ({ dev, credits }: DeveloperCardProps) => (
  <Card variant='outlined'>
    <CardMedia
      sx={{ height: 140 }}
      image={dev.image}
      title="green iguana"
    />
    <CardContent>
      <Typography variant='h6'>{dev.name}</Typography>
      <Typography variant='h6'>{dev.country}</Typography>
      <Typography>{dev.description}</Typography>
      <Typography>Price per ton: {dev.pricePerTon} / Offered volume in tons: {dev.offeredVolumeInTons} / Distribution weight: {dev.distributionWeight}</Typography>
      <Typography>Credits used: {credits}</Typography>
      <Typography>Supplier: {dev.supplierName}</Typography>
      <Typography>{dev.earliestDelivery.toLocaleDateString()}</Typography>
    </CardContent>
  </Card>
)

export default DeveloperCard