import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Home/HomeNav'
import LoginPage from './LoginPage'

function LoginContainer() {
  return (
    <Box
    sx={{
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Navbar />
    <LoginPage />
  </Box>
  )
}

export default LoginContainer