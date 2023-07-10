import React, { createContext, useState } from 'react';
import { loginUser } from './loginUser';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userID, setUserID] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUserEmail(data.email);
      setUserID(data.userId);
    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandler = () => {
    setUserEmail(null);
    setUserID(null);
  };

  const user = {
    email: userEmail,
    id: userID
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
