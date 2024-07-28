import { Box } from '@mui/material'
import React from 'react'
import HomePage from './HomePage'
import Navbar from '../Home/HomeNav'
import EducationPhoto from '../Photos/413144-PDTI0Y-350.jpg'
import LanguagesButtons from '../LanguageSelector'

function HomeContainer() {
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
      <HomePage />
    </Box>
  )
}

export default HomeContainer