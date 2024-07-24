import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import {register} from '../../API/UserLogin';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate('/login');
    };
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await register(name, phone, email, password);

      if(response.status==201){
        setMessage('Registration successful');
        navigate('/login');
      }
       // Perform additional actions like navigating to another page, etc.
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error
        setMessage('Registration failed: ' + (error.response?.data || error.message));
      } else {
        // Other errors
        setMessage('Registration failed: An unexpected error occurred');
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
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            Register
          </Button>
          {message && (
            <Alert severity={message.includes('successful') ? 'success' : 'error'}>{message}</Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Register;