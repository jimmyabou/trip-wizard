import React, { createContext, useState } from 'react';
import { loginUser } from './loginUser';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const [userEmail, setUserEmail] = useState(storedUser ? storedUser.email : null);
  const [userID, setUserID] = useState(storedUser ? storedUser.userId : null);

  const handleLogin = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUserEmail(data.email);
      setUserID(data.userId);

      const user = {
        email: data.email,
        id: data.userId
      };
      // Persist user data in local storage
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandler = () => {
    setUserEmail(null);
    setUserID(null);

    localStorage.removeItem('user');
  };

  const user = {
    email: userEmail,
    id: userID
  };

  console.log(user);

  return (
    <UserContext.Provider value={{ user, handleLogin, logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
