// import './App.scss';

import Fetch from './hooks/fetchUsers';
import UserForm from './components/userForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/loginForm';
import { loginUser } from './hooks/loginUser';
import { useState } from 'react';


const App = () => {

  const [userData, setUserData] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setUserData(data.email);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };
  const logoutHandler=()=>{
    setUserData(null);
  }

  return (
    <div className="App">
      <Router>
        <Navbar email={userData} logoutHandler={logoutHandler}/>
        <Routes>
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
          {/* Add more routes here */}










        </Routes>
      </Router>
    </div>
  );
};

export default App;

