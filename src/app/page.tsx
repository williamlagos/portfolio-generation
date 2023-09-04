'use client'

import { Box, Button, Divider, Input, Typography } from '@mui/material'
import { useState } from 'react'

import styles from './page.module.css'
import axios from 'axios'
import { Developer } from './types'
import { DeveloperCard } from './components'

const Home = () => {
  const [tons, setTons] = useState<number>(0)
  const [developers, setDevelopers] = useState<any[]>([])
  const [balance, setBalance] = useState<number>(0)

  const submit = (tons: number) => {
    axios.get(`/api/developers/?t=${tons}`).then((result) => {
      setDevelopers(result.data.portfolio)
      setBalance(result.data.balance)
    })
  }

  return (
    <Box className={styles.main}>
      <Typography variant='h5'>Portfolio Generator</Typography>
      <Typography>Type the desired volume in tons of carbon credits they need.</Typography>
      <Input 
        type='number'
        onChange={e => setTons(parseInt(e.target.value))} 
      />
      <Button
        onClick={() => submit(tons)}>
        Submit
      </Button>
      <Divider />
      {developers.map(({ dev, credits }) => (
        <DeveloperCard 
          dev={{ ...dev, earliestDelivery: new Date(dev.date)}} 
          credits={credits}
        />
      ))}
    </Box>
  )
}

export default Home