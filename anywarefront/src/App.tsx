import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dash from './Component/DashBoard/Dash';
import Login from './Component/Login/LoginContainer';
import Register from './Component/Register/RegisterContainer';
import HomeContainer from './Component/Home/HomeContainer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  const navigate = useNavigate();
  const [token,setToken] = useState('');
  useEffect(()=>{
    const data = localStorage.getItem("token")
    if(data)
    {
      setToken(data)
      navigate('/Dash')
    }
    else
      navigate('/')
  },[])

  return (
    
      
      <Routes>
        <Route path="/Dash" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeContainer />} />
      </Routes>
  );
}

export default App;