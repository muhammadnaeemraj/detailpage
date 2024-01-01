// Card.js
import React from 'react';

const Card = ({ id, title, description, details }) => {

  const handleContactButtonClick = () => {
    // Create a WhatsApp link with the specified contact number
    const whatsappLink = `https://wa.me/${+923057373695}`;
    
    // Open the link in a new tab
    window.open(whatsappLink, '_blank');
  };

  const handleShowDetails = () => {
    // Open a new window with detailed information
    const detailsWindow = window.open('', '_blank');
    
    // Render the detailed information in the new window
    detailsWindow.document.write(`
      <html>
      <head>
        <title>${title} - Details</title>
      </head>
      <body>
        <h2>${title}</h2>
        <p>${details}</p>
      </body>
      </html>
    `);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleContactButtonClick}>Contact on WhatsApp</button>
      <button onClick={handleShowDetails}>For more information</button>
    </div>
  );
};

export default Card;
