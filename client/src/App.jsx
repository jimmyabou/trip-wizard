// import './App.scss';

import Fetch from './hooks/fetchUsers';
import Navbar from './components/NavBar';




function App() {

  const { data } = Fetch();


  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
