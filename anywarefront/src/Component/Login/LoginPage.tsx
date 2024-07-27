import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import { loginUser } from '../../API/UserLogin';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await loginUser(email, password);

      if (response.status === 200) {
        localStorage.setItem('token', response.data);
        setMessage('Login successful');
        navigate('/Dash');
      }

    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error
        console.log(error.response);
        setMessage('Login failed: ' + (error.response?.data || error.message));
      } else {
        // Other errors
        setMessage('Login failed: An unexpected error occurred');
      }
    }
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())} // Convert to lowercase
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/')}
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ mt: 1, mb: 1 }}
          >
            Back
          </Button>
          {message && (
            <Alert severity={message.includes('successful') ? 'success' : 'error'}>{message}</Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
