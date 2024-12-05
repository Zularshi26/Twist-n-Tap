import React from 'react';
import './HipHop.css'; // Import the CSS file

const HipHop = () => {
  return (
    <div className="hiphop-container">
      <h1 className="hiphop-heading">Hip Hop</h1>
      <video className="hiphop-video" controls>
        <source src="/CategoriesImg/Pages/HipHopV1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="hiphop-description">
        Welcome to the Hip Hop dance page. Learn more about this vibrant dance form here!
      </p>
    </div>
  );
};

export default HipHop;
