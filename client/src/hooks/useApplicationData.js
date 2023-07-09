import { useState, useEffect, useReducer } from 'react';
import { loginUser } from './loginUser';

const useApplicationData = () => {
  const [userData, setUserData] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUserData(data.email);
      // console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };
  const logoutHandler=()=>{
    setUserData(null);
  }

  return {
    handleLogin,
    logoutHandler,
    userData
  };
};

export default useApplicationData;
