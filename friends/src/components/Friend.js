import React from 'react';

const Friend = ({ friend }) => {
  return (
    <div>
      <ul>
        <li>{friend.name}</li>
        <li>{friend.age}</li>
        <li>{friend.email}</li>
      </ul>
    </div>
  );
};

export default Friend;
