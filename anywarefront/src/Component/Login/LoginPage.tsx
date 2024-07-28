import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { loginUser } from '../../API/UserLogin';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(t('invalid_email'));
      return;
    }

    try {
      const response = await loginUser(email, password); // Email is already converted to lowercase in the onChange handler

      if (response.status === 200) {
        localStorage.setItem('token', response.data);
        setMessage(t('login_success'));
        navigate('/Dash');
      }
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(t('login_failed', { message: error.response?.data || error.message }));
      } else {
        setMessage(t('login_failed_unexpected'));
      }
    }
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  return (
    <Container component="main" maxWidth="xs">
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
          bgcolor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          padding: 3,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography component="h1" variant="h5">
          {t('login')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t('email_address')}
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
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
            name="password"
            label={t('password')}
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
            {t('login')}
          </Button>
          <Button
            onClick={() => navigate('/')}
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ mt: 1, mb: 1 }}
          >
            {t('back')}
          </Button>
          {message && (
            <Alert severity={message.includes(t('login_success')) ? 'success' : 'error'}>{message}</Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
