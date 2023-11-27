import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Add your logic here for handling email subscription
    // For simplicity, we'll just set isSubscribed to true after a brief delay
    // In a real application, you would likely make an API call or use a server to handle email subscriptions

    setTimeout(() => {
      // Simulate a successful subscription
      setIsSubscribed(true);
    }, 1000);
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {isSubscribed && <h2>Your email has been subscribed successfully!</h2>}
     
    </div>
  );
};

export default NewsLetter;
