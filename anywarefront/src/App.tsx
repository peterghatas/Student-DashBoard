
import './App.css';
import {Routes,Route} from "react-router-dom"
import  Dash  from './Component/DashBoard/Dash';
import  Login  from './Component/Login/LoginContainer';
import Register from './Component/Register/RegisterContainer';  
import  HomeContainer from './Component/Home/HomeContainer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
