import { useState, useEffect, useReducer } from 'react';
import { loginUser } from './users/loginUser';

const useApplicationData = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userID, setUserID] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUserEmail(data.email);
      setUserID(data.userId);
      // console.log(userData);
      // console.log(userID);

    } catch (error) {
      console.error(error);
    }
  };
  const logoutHandler = () => {
    setUserEmail(null);
    setUserID(null);
  };

  return {
    handleLogin,
    logoutHandler,
    userEmail,
    userID
  };
};

export default useApplicationData;
