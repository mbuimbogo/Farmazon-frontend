
import './App.css'; 
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import {Routes,Route} from 'react-router-dom';

function App() {
  return ( 
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/about" element={<About/>}/> 
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
