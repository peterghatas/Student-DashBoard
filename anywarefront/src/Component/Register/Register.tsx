import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import { register } from '../../API/UserLogin';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    try {
      const response = await register(name, phone, email, password);

      if (response.status == 201) {
        setMessage('Registration successful');
        navigate('/login');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage('Registration failed: ' + (error.response?.data || error.message));
      } else {
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
          bgcolor: 'rgba(0, 0, 0, 0.1)', // Darker and more opaque background
          backdropFilter: 'blur(10px)', // Blur effect
          borderRadius: 2, // Rounded corners
          padding: 3, // Padding inside the Box
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', // Darker shadow for depth
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
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase()); // Convert email to lowercase
              setEmailError('');
            }}
            error={!!emailError}
            helperText={emailError}
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
          <Button
            onClick={() => navigate('/')}
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ mt: 1, mb: 2 }}
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

export default Register;
