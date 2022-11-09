import './App.css'; 
import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Products from './components/Products';
import {Routes,Route} from 'react-router-dom';

function App() {
  return ( 
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App;