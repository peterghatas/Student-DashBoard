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


     {/* <Grid  flex={10} bgcolor='grey' sx={{width:'60%'}}>
        <Typography >Our Announcements</Typography>
              {getAllAnnouncements.map((announcement: any)=>
                <Grid display='flex' justifyContent='space-between' alignItems='center' >
                   <Grid flex={4} sx={{borderRight:1 ,p:2}}> {announcement.doctor}</Grid>
                   
                   <Grid flex={8} sx={{p:2}}> {announcement.event} </Grid> 

                     </Grid>)}
          

        </Grid> */}
    
    </Box>
  )
}

export default Feed