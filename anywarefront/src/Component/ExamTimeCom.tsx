


import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import EducationPhoto from '../Photos/413144-PDTI0Y-350.jpg'

function ExamTimeCom() {
  return (
    <Grid bgcolor='#EEEDEB' >

    <Card sx={{ maxWidth: 1330 , maxHeight:500 }} >

    <CardMedia
      component="img"
      height="194"
      image={EducationPhoto}
      />

    <CardHeader
      title="Exam Time"
      subheader="Here you are, Are you ready to fight? Don't worry, we prepared some tips to be ready to your Exam"
    />

    <CardContent>
      <Typography variant="body2" color="text.secondary" fontFamily='serif' >
        "Nothing happens until something moves." - Albert Einstein
      </Typography>
      
    </CardContent>
    <CardActions >
      <Button variant='outlined'>
        View Tips
      </Button>
    </CardActions>
  </Card>

  {/* <img src={EducationPhoto} width={300} height={300}></img> */}

  </Grid>
  )
}

export default ExamTimeCom