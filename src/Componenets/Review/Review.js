// Review.js
import React from 'react';
import './Review2.css';

const Review = ({ name, comment, rating }) => {
  return (
    <div className="review" img src='https://tse4.mm.bing.net/th?id=OIP.wF0F5D7Yz3cgxLRvM3YZQAHaEK&pid=Api&P=0&h=180'>
      <h3>{name}</h3>
      <p className="rating">Rating: {rating}/5</p>
      <p className="comment">{comment}</p>
    </div>
  );
};

export default Review;
