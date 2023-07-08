import logo from './logo.svg';
import './App.css';
import Fetch from './hooks/fetchUsers';
import UserForm from './components/userForm';


function App() {
  const{ data}=Fetch();
  return (
    <div className="App">
    <UserForm/>
    {data && (
     <ul>
      {data.users.map(user => (
     <li key={user.id}>
      Email: {user.email}, Password: {user.password}
   </li>
    ))}
    </ul>
    )}
  </div>
  );
}

export default App;
