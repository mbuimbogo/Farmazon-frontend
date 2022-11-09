import React from 'react'
import '../styles/login.css'
import Register from './Register';
import {Routes,Route} from 'react-router-dom';

const Login = () => {
  return (
    <div className='main-login'>
        Login Page<br/>
        <Routes>
      <Route path="/register" element={<Register/>}/>
      </Routes>
        <div className='login-contain'>
        
        </div>
      
      
    </div>
  )
}

export default Login

