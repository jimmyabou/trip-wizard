import Fetch from './hooks/fetchUsers';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ActivitiesList from './components/ActivitiesList';
import { UserProvider } from './hooks/UserContext';

import './styles/Main.scss';

const App = () => {

  return (
    <div className="App">
      <Router>
      <UserProvider>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ActivitiesList/>} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          {/* Add more routes here */}










        </Routes>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
