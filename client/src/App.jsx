import React, { useContext } from 'react';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ActivitiesList from './components/ActivitiesList';
import useApplicationData from './hooks/useApplicationData';
import FetchAttractions from './hooks/attractions/fetchAttractions';
import FetchFeaturedAttractions from './hooks/attractions/fetchFeaturedAttractions';
import FetchFavAttractions from './hooks/attractions/fetchFavAttractions';
import UserContext from './providers/UserContext';
import { AttractionsContext } from './providers/AttractionsContext';


import './styles/Main.scss';

const App = () => {

  const { user } = useContext(UserContext);
  const { featuredAttractionsData, isLoadingFeatured, favAttractionsData, isLoadingFav } = useContext(AttractionsContext);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={isLoadingFeatured === true ? <p>Loading...</p> : <ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Helping you find your way..."} />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          {/* Add more routes here */}
          {user &&
            <Route path={`/favorites/${user.id}`} element={isLoadingFav === true ? <p>Loading...</p> : <ActivitiesList attractions={favAttractionsData} pageTitle={"Your Favorite Experiences"} />} />
          }










        </Routes>
      </Router>
    </div >
  );
};

export default App;
