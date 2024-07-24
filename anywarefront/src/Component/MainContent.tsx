import { Box, Card, Grid, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import AnnouncmentCom from './AnnouncmentCom'
import Quizes from './Quizes'

function MainContent() {
    
  return (
    <Box  display='flex' flex='row' sx={{width:'100%' }} justifyContent='space-between'>

        <Box bgcolor='white' borderRadius='20px'  sx={{width:'60%' }} >
        <AnnouncmentCom/>
        </Box>

        <Box bgcolor='white' borderRadius='20px' sx={{width:'25%'}}>
          <Quizes/>
        </Box>


    </Box>
  )
}

export default MainContent