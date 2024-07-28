import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          bgcolor: 'rgba(0, 0, 0, 0.1)', 
          backdropFilter: 'blur(10px)', 
          borderRadius: 2, 
          padding: 3, 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', 
        }}
      >
        <Typography component="h1" variant="h5">
          {t('welcome')}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
            onClick={handleLoginClick}
          >
            {t('login')}
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleRegisterClick}
          >
            {t('register')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
