// import './App.scss';

import Fetch from './hooks/fetchUsers';
import Navbar from './components/NavBar';
import ActivitiesList from './components/ActivitiesList';



function App() {

  const { data } = Fetch();


  return (
    <div className="App">
      <Navbar />
      <ActivitiesList/>

    </div>
  );
}

export default App;
