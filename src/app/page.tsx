'use client'

import { AppBar, Box, Button, Input, InputBase, Typography, Toolbar, alpha, styled, IconButton, Grid, Divider } from '@mui/material'
import { Send } from '@mui/icons-material'
import { useState } from 'react'
import axios from 'axios'

import styles from './page.module.css'

import { DeveloperCard } from './components'


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `1em`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
  

const Home = () => {
  const [tons, setTons] = useState<number>(0)
  const [developers, setDevelopers] = useState<any[]>([])
  const [balance, setBalance] = useState<number>(-1)

  const submit = (tons: number) => {
    axios.get(`/api/developers/?t=${tons}`).then((result) => {
      setDevelopers(result.data.portfolio)
      setBalance(result.data.balance)
    })
  }

  const fn = ({ target: { value } }: any) => {
    const v = parseInt(value)
    setTons(!isNaN(v) ? v : 0)
  }

  return (
    <Box className={styles.main}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
          variant='h6'
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Portfolio Generator
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Type the desired volume in tons of carbon credits they need."
              inputProps={{ 'aria-label': 'search' }}
              data-cy='tons-input'
              onChange={fn}
            />
          </Search>
          <IconButton 
            onClick={() => submit(tons)} 
            color="secondary"
            data-cy='tons-submit'
          >
            <Send />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ m: 2 }}>
        <Grid container spacing={2}>
          {developers.map(({ dev, credits }, index: number) => (
            <Grid key={index} item xs={12} md={4}>
              <DeveloperCard 
                index={index}
                dev={{ ...dev }} 
                credits={credits}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {balance !== -1 && <Typography align='center'>Credits Remaining: {balance}</Typography>}
    </Box>
  )
}

export default Home