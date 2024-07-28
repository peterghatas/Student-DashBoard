import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import EducationPhoto from '../Photos/413144-PDTI0Y-350.jpg';

function ExamTimeCom() {
  return (
    <Grid container justifyContent="center" bgcolor='#EEEDEB' sx={{ padding: 2 }}>
      <Card sx={{
        width: {
          xs: '100%', 
          sm: '100%',  
          md: '100%',  
          lg: '100%',  
          xl: '100%'   
        },
        maxHeight: 500,
        margin: 'auto', 
        boxShadow: 3 
      }}>
        <CardMedia
          component="img"
          height="194"
          image={EducationPhoto}
        />
        <CardHeader
          title="Exam Time"
          subheader="Here you are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your Exam"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontFamily='serif'>
            "Nothing happens until something moves." - Albert Einstein
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined'>
            View Tips
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ExamTimeCom;
