import React, { useState, useEffect } from 'react';

const FriendForm = ({ addFriend, editFriend, friendToEdit }) => {
  const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

  const handleInputChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (friendToEdit) {
      editFriend(newFriend);
    } else {
      addFriend({ ...newFriend, id: Date.now() });
    }
    setNewFriend({ name: '', age: '', email: '' });
  };

  const isDisabled = () =>
    !newFriend.name || !newFriend.age || !newFriend.email;

  useEffect(() => {
    if (friendToEdit) {
      setNewFriend({ ...friendToEdit });
    }
  }, [friendToEdit]);

  return (
    <div className='form-container'>
      <h2>Add A New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleInputChange}
          name='name'
          placeholder='Name'
          value={newFriend.name}
        />
        <input
          type='number'
          onChange={handleInputChange}
          name='age'
          placeholder='Age'
          value={newFriend.age}
        />
        <input
          type='email'
          onChange={handleInputChange}
          name='email'
          placeholder='Email'
          value={newFriend.email}
        />
        <button className='submit-friend' disabled={isDisabled()}>
          {friendToEdit ? 'Edit Friend' : 'AddFriend'}
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
