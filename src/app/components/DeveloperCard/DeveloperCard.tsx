import { Box, Card, CardMedia, CardContent, Chip, Divider, Tooltip, Typography, Stack } from '@mui/material'
import { Anchor, AttachMoney, CreditScore, Scale } from '@mui/icons-material'

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
      <Typography variant='h5'>{dev.name}</Typography>
      <Typography variant='h6'>{dev.country}</Typography>

      <Divider sx={{ my: 1 }} />

      <Typography sx={{ my: 2 }}>
        {dev.description}
      </Typography>

      <Box sx={{ my: 1 }}>
        <Tooltip sx={{ mr: 1 }} title="Price per ton">
          <Chip icon={<AttachMoney />} label={dev.pricePerTon} />
        </Tooltip>  

        <Tooltip sx={{ mr: 1 }} title="Offered volume in tons">
          <Chip icon={<Anchor />} label={dev.offeredVolumeInTons} />
        </Tooltip>

        <Tooltip sx={{ mr: 1 }} title="Distribution weight">
          <Chip icon={<Scale />} label={dev.distributionWeight} />
        </Tooltip>

        <Tooltip sx={{ mr: 1 }} title="Credits used">
          <Chip icon={<CreditScore />} label={credits} />
        </Tooltip>
      </Box>
      
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 2}} spacing={2}>
        <Typography>Supplier: {dev.supplierName}</Typography>
        <Typography>
          {(new Date(dev.earliestDelivery)).toLocaleDateString()}&nbsp;
          {(new Date(dev.earliestDelivery)).toLocaleTimeString()}
        </Typography>
      </Stack>
    </CardContent>
  </Card>
)

export default DeveloperCard