import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import EducationPhoto from '../Photos/413144-PDTI0Y-350.jpg';

function ExamTimeCom() {
  return (
    <Grid container justifyContent="center" bgcolor='#EEEDEB' sx={{ padding: 2 }}>
      <Card sx={{
        width: {
          xs: '100%', // Full width on extra-small screens
          sm: '100%',  // 80% width on small screens
          md: '100%',  // 70% width on medium screens
          lg: '100%',  // 60% width on large screens
          xl: '100%'   // 50% width on extra-large screens
        },
        maxHeight: 500,
        margin: 'auto', // Center the card horizontally
        boxShadow: 3 // Add some shadow for better visual appeal
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
