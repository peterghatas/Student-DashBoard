// src/components/LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value as string;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      label="Language"
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ar">Arabic</MenuItem>
      {/* Add more languages as needed */}
    </Select>
  );
};

export default LanguageSelector;
