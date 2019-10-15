import React, { useState, useEffect } from 'react';
import { withAuth } from './withAuth';
import { Friend } from './components/Friend';
export const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    withAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
