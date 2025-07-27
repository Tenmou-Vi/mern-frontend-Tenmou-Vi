import React from 'react';
import { googleLogout } from '@react-oauth/google';

function Logout({ setUser }) {
  const onLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.setItem("login", null);
    console.log('Logout made successfully');
  };

  return (
    <button onClick={onLogout}>Logout</button>
  );
}

export default Logout; 