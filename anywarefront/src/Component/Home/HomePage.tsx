import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Container component="main" maxWidth="xs">
    <Box
     sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 8,
      bgcolor: 'rgba(0, 0, 0, 0.1)', // Darker and more opaque background
      backdropFilter: 'blur(10px)', // Blur effect
      borderRadius: 2, // Rounded corners
      padding: 3, // Padding inside the Box
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', // Darker shadow for depth
    }}
  >
      <Typography component="h1" variant="h5">
        Welcome
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={handleRegisterClick}
        >
          Register
        </Button>
      </Box>
    </Box>
  </Container>
  );
};

export default Home;