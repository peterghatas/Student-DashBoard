import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExamTimeCom from './ExamTimeCom';
import MainContent from './MainContent';

function Feed() {
  return (
    <Box flex={4} p={2}> 

    <Stack divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent={"space-between"} >
      
      <ExamTimeCom/>

      <MainContent/>

      </Stack>

    
    </Box>
  )
}

export default Feed