import React, { useState, useEffect } from 'react';
import { createUser } from '../hooks/createUser';
import { TextField, Button, Box } from '@mui/material';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emptyform, setEmptyForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return ;
    }
    // console.log("send to axios")
    const userData = {
      username,
      password,
      email,
      address,
      phone_number: phoneNumber,
    };

    createUser(userData)
      .then(response => {
        // console.log(response);
        alert('User successfully created');
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
    setConfirmPassword('');
  }, [emptyform]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      height="100vh"
      bgcolor="#f0f0f0"
      padding={3}
    >
      <form onSubmit={handleSubmit} style={{ width: '40%' }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Register your account</h2>
        <Box bgcolor="#fff" padding={3}>
          <div>
            <TextField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              required
            />
          </div>

          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="Phone Number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              required
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            style={{ marginTop: '1rem' }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserForm;