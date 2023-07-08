import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emptyform, setEmptyForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted email:', email);
    console.log('Submitted password:', password);
    setEmptyForm(!emptyform);
  };
  useEffect(() => {
    setPassword('');
    setEmail('');
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
      <form onSubmit={handleSubmit} style={{ width: '30%' }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Login to your account</h2>
        <Box bgcolor="#fff" padding={3}>
          <div>
            <TextField
              label="Email"
              type="email"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="Password"
              type="password"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            style={{ marginTop: '1rem' }}
          >
            Login
          </Button>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
