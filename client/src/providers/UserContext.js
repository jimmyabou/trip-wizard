import React, { createContext, useState } from 'react';
import { loginUser } from '../hooks/users/loginUser';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const getUser = () => JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(getUser());

  const handleLogin = async (credentials) => {
    try {
      const data = await loginUser(credentials);

      const user = {
        email: data.email,
        id: data.userId
      };

      // Persist user data in local storage
      localStorage.setItem('user', JSON.stringify(user));
      setUser(getUser());

    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('user');
    setUser(getUser());
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
