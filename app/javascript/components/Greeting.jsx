import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/greetings/random')
      .then((response) => response.json())
      .then((data) => setGreeting(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
