import { Box, Button, Input, Typography } from '@mui/material'
import styles from './page.module.css'

const Home = () => {
  return (
    <Box className={styles.main}>
      <Typography variant='h5'>Portfolio Generator</Typography>
      <Typography>Type the desired volume in tons of carbon credits they need.</Typography>
      <Input></Input>
      <Button>Submit</Button>
    </Box>
  )
}

export default Home