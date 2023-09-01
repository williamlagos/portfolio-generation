'use client'

import { Box, Button, Input, Typography } from '@mui/material'
import { useState } from 'react'

import styles from './page.module.css'
import axios from 'axios'

const Home = () => {
  const [tons, setTons] = useState<number>(0)

  const submit = (tons: number) => {
    axios.get(`/api/developers/?t=${tons}`).then((result) => {
      console.log(result.data)
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
    </Box>
  )
}

export default Home