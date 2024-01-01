// MoreInformation.js
import React from 'react';

const MoreInformation = ({ details }) => {
  const contactNumber = '+923057373695';

  const handleContactButtonClick = () => {
    // Create a WhatsApp link with the specified contact number
    const whatsappLink = `https://wa.me/${contactNumber}`;
    
    // Open the link in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <h3>Detailed Information</h3>
      <p>{details}</p>
      <button onClick={handleContactButtonClick}>Contact on WhatsApp</button>
    </div>
  );
};

export default MoreInformation;
