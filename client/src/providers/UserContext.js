import React, { createContext, useState } from 'react';
import { loginUser } from '../hooks/users/loginUser';

import axios from 'axios';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const getUser = () => JSON.parse(localStorage.getItem('user'));
  const [newPackageAdded, setNewPackageAdded] = useState(false);
  const [packageName, setPackageName] = useState('');
  const [user, setUser] = useState(getUser());
  const [packages, setPackages] = useState([]);

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

  //create package handlers
  const createPackage=async(userId,packageName)=>{
    try {

      console.log(userId,packageName);
      const response = await axios.post('/createPackage', { packageName,userId })
        console.log(response.data);
        setPackageName('');
        setNewPackageAdded(true);
      
    } catch (error) {
      console.error(error);
    }
  };
  //fetch packages for logged in user
  const fetchPackages = async (userId) => {
    try {
      console.log(userId);
      const response = await axios.get(`/getPackages/${userId}`);
      setPackages(response.data.packages);
      setNewPackageAdded(false);
      console.log(packages);
    } catch (error) {
      console.error(error);
    }
  };
  //delete a packge from package list
  const deletePackage = async (packageId) => {
    try {
      const res=await axios.delete(`/deletePackage/${packageId}`);
      console.log(res.data)
      setPackages((prevPackages) =>
        prevPackages.filter((pkg) => pkg.package_id !== packageId)
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UserContext.Provider value={{ user, handleLogin, logoutHandler, createPackage,packageName, newPackageAdded,setPackageName,fetchPackages,packages,deletePackage  }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
