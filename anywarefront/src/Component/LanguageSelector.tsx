import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
      <Select
        value={i18n.language}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
        <MenuItem value="ar">Arabic</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </Box>
  );
};

export default LanguageSelector;