import logo from './logo.svg';
import './App.css';
import Fetch from './hooks/fetchUsers';
import UserForm from './components/userForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const{ data}=Fetch();
  return (
    <>

    <Router>
      <div>
        <h1>Main App Page</h1>
        <p>This is the main page of your app.</p>
        
        <Link to="/userform">register</Link>

        <Routes>
        <Route path="/userform" element={<UserForm />} />
        </Routes>
      </div>
    </Router></>
  );
};


export default App;

// return (
//   <div className="App">
//   <UserForm/>
// </div>
// );
//_________________________________
// {data && (
  //  <ul>
//   {data.users.map(user => (
//  <li key={user.id}>
//   Email: {user.email}, Password: {user.password}
// </li>
// ))}
// </ul>
// )}