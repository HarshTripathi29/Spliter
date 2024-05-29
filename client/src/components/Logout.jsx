import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to home page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  return (
    <button onClick={handleLogout} className='logout-button'>
      Logout
    </button>
  );
}

export default Logout;
