import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';


function User() {

  const {user} = useSelector(selectUser)

  return (
    <div>
      <h1>Usuário: {user}</h1>
    </div>
  );
}

export default User;