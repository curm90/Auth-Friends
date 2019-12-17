import React, { useState, useEffect } from 'react';
import withAuth from '../utils/withAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [friendToEdit, setFriendToEdit] = useState('');
  console.log(friends);

  useEffect(() => {
    withAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addFriend = newFriend => {
    withAuth()
      .post('/friends', newFriend)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  const deleteFriend = id => {
    withAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  const editFriend = friend => {
    withAuth()
      .put(`/friends/${friend.id}`, friend)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err))
      .finally(setFriendToEdit(null));
  };

  const onFriendToEditChange = friend => {
    setFriendToEdit(friend);
  };

  return (
    <div>
      <FriendForm
        addFriend={addFriend}
        editFriend={editFriend}
        friendToEdit={friendToEdit}
        friends={friends}
      />
      <div className='friends-container'>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            deleteFriend={deleteFriend}
            onFriendToEditChange={onFriendToEditChange}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
