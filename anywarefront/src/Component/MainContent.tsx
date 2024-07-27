import { Box, Card, Grid, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import AnnouncmentCom from './AnnouncmentCom'
import Quizes from './Quizes'

function MainContent() {
    
  return (
    <Box sx={{ padding: 2, bgcolor: '#EEEDEB' }}>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Box bgcolor='white' borderRadius='20px' p={2} boxShadow={3}>
          <AnnouncmentCom />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box bgcolor='white' borderRadius='20px' p={2} boxShadow={3}>
          <Quizes />
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default MainContent