import React, { useState, useEffect } from 'react';
import { createUser } from '../hooks/createUser';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emptyform, setEmptyForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("send to axios")
    const userData = {
      username,
      password,
      email,
      address,
      phone_number: phoneNumber,
    };
  
    createUser(userData)
    .then(response => {
      console.log(response);
      console.log("success");
      setEmptyForm(!emptyform);
    })
    .catch(error => {
      console.error(error);
    });
  
  };  
  useEffect(() => {
    setUsername('');
    setPassword('');
    setEmail('');
    setAddress('');
    setPhoneNumber('');
  }, [emptyform]);

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </label>
    </div>
    <button type="submit">Submit</button>
  </form>
  
  );
};

export default UserForm;
