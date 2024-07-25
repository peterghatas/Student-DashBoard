import { Box } from '@mui/material'
import React from 'react'
import RegisterPage from './Register'
import Navbar from '../Home/HomeNav'

function RegisterContainer() {
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
    <RegisterPage />
  </Box>
  )
}

export default RegisterContainer