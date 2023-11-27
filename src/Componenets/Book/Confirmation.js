// src/components/Confirmation.js
import Footer from '../Footer/Footer';
import './Confirmation.css'
import React from 'react';

const Confirmation = () => {
  return (
    <div>
      <h1 className='pp'>Booking Confirmed!</h1>
      <h3 className='xx'>Your home helper will arrive soon!!</h3>
      <p className='oo'>for any queries please contact the email: homehelper@gmail.com</p>
      <Footer/>
    </div>
  );
};

export default Confirmation;