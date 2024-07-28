import { Box, Button } from '@mui/material'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguagesButtons = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
    };

    const [isEnglishVisible, setIsEnglishVisible] = useState(false);
    const [isArabicVisible, setIsArabicVisible] = useState(true);

    const vanishEnglishButton = () => {
        setIsEnglishVisible(false);
        setIsArabicVisible(true);
    };

    const vanishArabicButton = () => {
        setIsArabicVisible(false);
        setIsEnglishVisible(true);
    };

    const handleEnglishClick = () => {
        changeLanguage('en');
        vanishEnglishButton();
    };

    const handleArabicClick = () => {
        changeLanguage('ar');
        vanishArabicButton();
    };




  return (
    <Box>
        {isEnglishVisible && <Button variant='contained' onClick={() => handleEnglishClick()}>English</Button>}
        {isArabicVisible && <Button variant='contained' onClick={() => handleArabicClick()}>العربية</Button>}
      </Box>
  )
}

export default LanguagesButtons