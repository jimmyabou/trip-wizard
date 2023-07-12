import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// COMPONENTS \\
import UserForm from './components/UserForm';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ActivitiesList from './components/ActivitiesList';

// CONTEXTS \\
import UserContext from './providers/UserContext';
import { AttractionsContext } from './providers/AttractionsContext';

// STYLES \\
import './styles/Main.scss';

const App = () => {

  const { user } = useContext(UserContext);
  const { featuredAttractionsData, isLoadingFeatured, favAttractionsData, isLoadingFav, attractionsByCityData, isLoadingattractionsByCity } = useContext(AttractionsContext);

  const attractionsLoading = isLoadingFeatured === true && isLoadingattractionsByCity ? true : false;


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            attractionsLoading === true ? <p>Loading...</p> :
              attractionsByCityData.attractions.length === 0 ?
                < ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Helping you find your way..."} /> :
                < ActivitiesList attractions={attractionsByCityData.attractions} pageTitle={`Your experiences in ${attractionsByCityData.attractions[0].city} await....`} />
          } />
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
