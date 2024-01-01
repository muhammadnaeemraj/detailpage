// App.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import MoreInformation from './moreinformation';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  const showDetails = (id) => {
    setSelectedCard(id);
  };

  return (
    <div>
      {data.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          details={card.details}
          showDetails={showDetails}
        />
      ))}

      {selectedCard !== null && (
        <MoreInformation details={data[selectedCard - 1].details} />
      )}
    </div>
  );
};

export default App;
