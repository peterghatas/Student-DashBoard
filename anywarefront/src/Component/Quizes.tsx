import { Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchQuizes } from '../redux/slices/quizesSlice';
import { RootState } from '../redux/store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useEffect } from 'react';


function Quizes() {

  const dispatch = useAppDispatch();
  const { data: allQuizes, status, error } = useAppSelector((state: RootState) => state.quizes);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuizes());
    }
  }, [status, dispatch]);



      const Announ = (props:any) => {
        return(
<Box display='flex' justifyContent='start' alignItems='center' flexDirection='row' columnGap='1vw'>
      <Card
        sx={{
          width: 400,
          bgcolor: 'rgba(0, 0, 0, 0.09)', // Semi-transparent black for glass effect
          backdropFilter: 'blur(10px)', // Blur effect
          borderRadius: 2, // Rounded corners
          padding: 2, // Padding inside the Card
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
        }}
      >
        <CardContent>
          <Typography sx={{ mb: 3 }} variant="h5" component="div">
            <Box display='flex' flexDirection='row'>
              <AssignmentIcon sx={{ marginTop: '8px' }} />
              <Typography sx={{ mb: 0, fontFamily: 'serif', fontSize: '25px', marginLeft: 1 }} variant="h5">
                {props.quiz.title}
              </Typography>
            </Box>
          </Typography>
          <Typography display='flex' flexDirection='row' sx={{ mb: 1.5 }} color="text.secondary">
            <Typography width='65px'>Course: </Typography>
            <Typography> {props.quiz.course}</Typography>
          </Typography>
          <Typography display='flex' flexDirection='row' sx={{ mb: 1.5 }} color="text.secondary">
            <Typography width='65px'>Topic: </Typography>
            <Typography> {props.quiz.topic}</Typography>
          </Typography>
          <Typography display='flex' flexDirection='row' sx={{ mb: 1.5 }} color="text.secondary">
            <Typography width='65px'>Date:</Typography>
            <Typography>{props.quiz.date}</Typography>
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center the button horizontally
          }}
        >
          <Button variant="outlined">Start {props.quiz.title}</Button>
        </CardActions>
      </Card>
    </Box>
        )
      }


  return (

    
         <Box borderRadius='20px'  display='flex' flexDirection='column' rowGap='2vh' padding='10px' sx={{overflowY:'auto' ,maxHeight:'300px'}}>

        <Typography variant='h4' sx={{fontFamily:'serif'}}  >Whats Due..?</Typography>

              {allQuizes.map((quiz: any)=>
                <Announ quiz={quiz} key={quiz.id} />
                )}       
        </Box>
  )
}

export default Quizes