import React from 'react';

const Friend = ({ friend, deleteFriend, onFriendToEditChange }) => {
  return (
    <div className='friend-container'>
      <div className='friend-info'>
        <ul>
          <li>
            <span>Name</span>
            {friend.name}
          </li>
          <li>
            <span>Age</span>
            {friend.age}
          </li>
          <li>
            <span>Email</span>
            {friend.email}
          </li>
        </ul>
      </div>
      <div className='friend-buttons'>
        <button
          className='edit-friend'
          onClick={() => onFriendToEditChange(friend)}
        >
          Edit
        </button>
        <button
          className='delete-friend'
          onClick={() => deleteFriend(friend.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Friend;
