import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  // Function to update the state
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div style={{ padding: '20px', border: '2px solid black' }}>
      <h1>Parent Component</h1>
      <p>Message: {message}</p>
      {/* Pass the update function to the child */}
      <Child updateMessage={updateMessage} />
    </div>
  );
};

export default Parent;
