import React from 'react';

const Child = ({ updateMessage }) => {
  const handleClick = () => {
    // Update the parent's state with a new message
    updateMessage("Updated by Child!");
  };

  return (
    <div style={{ padding: '10px', border: '1px solid gray', marginTop: '10px' }}>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Update Parent Message</button>
    </div>
  );
};

export default Child;
