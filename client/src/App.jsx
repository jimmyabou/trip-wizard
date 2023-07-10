import Fetch from './hooks/fetchUsers';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ActivitiesList from './components/ActivitiesList';
import { UserProvider } from './hooks/UserContext';
import useApplicationData from './hooks/useApplicationData';
import FetchAttractions from './hooks/attractions/fetchAttractions';
import FetchFeaturedAttractions from './hooks/attractions/fetchFeaturedAttractions';

import './styles/Main.scss';

const App = () => {

  const { featuredAttractionsData,
    isLoading,
    error } = FetchFeaturedAttractions();

    console.log("featuredAttractionsData", featuredAttractionsData);
    console.log("isLoading", isLoading);
    console.log("error", error);




  return (
    <div className="App">
      <Router>
      <UserProvider>
        <Navbar />
        
        <Routes>
          <Route path="/" element={isLoading === true? <p>Loading...</p> : <ActivitiesList attractions={featuredAttractionsData.attractions}/>} />
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
