import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Componenets/Navbar/Navbar';
import Footer from './Componenets/Footer/Footer';
import Events from './Pages/Events';
import Organize from './Pages/Organize';
import Participate from './Pages/Participate';
import React, { useState } from 'react';

import About from './Componenets/About/About';
import Service1 from './Componenets/Service/Service1';
import Homepage from './Componenets/Review/Review1';
import SignUpPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import BookingForm from './Componenets/Book/BookingForm';
import Confirmation from './Componenets/Book/Confirmation';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/organize' element={<Organize/>}/>
        <Route path='/participate' element={<Participate/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/About' element={<About/>}/>
         <Route path='/Service' element={<Service1/>}/>
         <Route path='/Review' element={<Homepage/>}/>
         <Route path='/book' element={<BookingForm/>}/>
         <Route path='/confirm' element={<Confirmation/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;