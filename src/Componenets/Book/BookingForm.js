// src/components/BookingForm.js
import './BookingForm.css'
import {Link} from 'react-router-dom';

import React, { useState } from 'react';

const BookingForm = ({ onBookNow }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookNow({ name, date });
  };

  return (
    <div className='done'>
      <h1>BOOK YOUR HOME HELPER!!</h1>
      <div className='body'>
    <form onSubmit={handleSubmit} className='form'>
      <label>
       <p>Name:</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        <p>Email:</p>
        <input type='text'></input>
      </label>
      <label>
        <p>Mobile no:</p>
        <input type='text'></input>
      </label>
      <br />
      <label>
        <p>Address:</p>
        <input type='text'></input>
      </label>
      <label>
        <label>
          <p>State:</p>
          <input type='text'></input>
        </label>
        <label>
          <p>Pincode</p>
          <input type='text'></input>
        </label>
        
        <p>Homehelper you need for:</p>
        <select>
          <option>--Select--</option>
          <option>
            Cooking
          </option>
          <option>
            Gardening
          </option>
          <option>
            Home cleaning
          </option>
          <option>
            child care
          </option>
          <option>
            All rounder
          </option>
        </select>
      </label>
      <br />
      <label>
        <p>Date:</p>
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <br />
      <Link to='/confirm'><button type="submit">Book Now</button></Link>
      </form>
    </div>
    </div>
  );
};

export default BookingForm;