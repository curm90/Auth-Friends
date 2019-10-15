import React from 'react';

const Friend = ({ friend, deleteFriend, onFriendToEditChange }) => {
  return (
    <div>
      <ul>
        <li>{friend.name}</li>
        <li>{friend.age}</li>
        <li>{friend.email}</li>
      </ul>
      <button onClick={() => deleteFriend(friend.id)}>Delete</button>
      <button onClick={() => onFriendToEditChange(friend)}>Edit</button>
    </div>
  );
};

export default Friend;
