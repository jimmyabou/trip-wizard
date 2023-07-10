import Fetch from './hooks/fetchUsers';
import UserForm from './components/userForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/loginForm';
import ActivitiesList from './components/ActivitiesList';
import useApplicationData from './hooks/useApplicationData';

import './styles/Main.scss';

const App = () => {
  const {
    handleLogin,
    logoutHandler,
    userData
  } = useApplicationData();

  return (
    <div className="App">
      <Router>
        <Navbar email={userData} logoutHandler={logoutHandler} />
        <ActivitiesList />
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
          {/* Add more routes here */}










        </Routes>
      </Router>
    </div>
  );
};

export default App;


