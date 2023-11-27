import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './Review2.css';

const Review1 = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleRatingClick = (clickedRating) => {
    setRating(clickedRating);
  };

  return (
    <div className='review1'>
    <div className='ui'>
      <h1>Customer Review</h1>
      <h2>Please rate your experience:</h2>
      <div className='star'>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onMouseOver={() => handleMouseOver(star)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleRatingClick(star)}
            style={{
              cursor: 'pointer',
              fontSize: '45px',
              color: star <= (hoverRating || rating) ? 'gold' : 'gray',
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
      {rating > 0 && (
        <p className='ok'>Your rating: {rating} {rating === 1 ? 'star' : 'stars'}
        <br></br><p className='c'>Thank you for your Feedback</p></p>
      )}
      </div>
      <Footer/>
    </div>
      
  );
};

export default Review1;
