import React, { useContext } from 'react';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ActivitiesList from './components/ActivitiesList';
import { UserProvider } from './hooks/UserContext';
import useApplicationData from './hooks/useApplicationData';
import FetchAttractions from './hooks/attractions/fetchAttractions';
import FetchFeaturedAttractions from './hooks/attractions/fetchFeaturedAttractions';
import FetchFavAttractions from './hooks/attractions/fetchFavAttractions';
import UserContext from './hooks/UserContext';


import './styles/Main.scss';

const App = () => {
  //const { user } = useContext(UserContext);

  //console.log(user.id, user.email);

  const { featuredAttractionsData,
    isLoading,
    error } = FetchFeaturedAttractions();

  //const { favAttractionsData, isLoading: isLoadingFav } = FetchFavAttractions({ userId: user.id });


  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={isLoading === true ? <p>Loading...</p> : <ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Helping you find your way..."} />} />
            <Route path="/register" element={<UserForm />} />
            <Route path="/login" element={<LoginForm />} />
            {/* Add more routes here */}
            {/* {user.id &&
              <Route path={`/favorites/${user.id}`} element={isLoadingFav === true ? <p>Loading...</p> : <ActivitiesList attractions={favAttractionsData.attractions} pageTitle={"Your Favorite Experiences"} />} />
            } */}










          </Routes>
        </Router>
      </UserProvider>
    </div >
  );
};

export default App;
