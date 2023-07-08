// import './App.scss';

import Fetch from './hooks/fetchUsers';
import UserForm from './components/userForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import userForm from './components/userForm';



function App() {
  const { data } = Fetch();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};


export default App;

