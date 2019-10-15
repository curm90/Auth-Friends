import React from 'react';

const Friend = ({ friend, deleteFriend }) => {
  return (
    <div>
      <ul>
        <li>{friend.name}</li>
        <li>{friend.age}</li>
        <li>{friend.email}</li>
      </ul>
      <button onClick={() => deleteFriend(friend.id)}>Delete</button>
    </div>
  );
};

export default Friend;
