import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// COMPONENTS \\
import UserForm from './components/login/UserForm';
import Navbar from './components/nav/NavBar';
import LoginForm from './components/login/LoginForm';
import ActivitiesList from './components/activities-list/ActivitiesList';
import CategoryFilters from './components/category-filter/CategoryFilters';
import LoginAlertModal from './components/modals/LoginAlertModal';
import DescModal from './components/modals/DescModal';
import LoadingSpinner from './components/Loading';
import PackageDays from './components/PackageDays';
// CONTEXTS \\
import UserContext from './providers/UserContext';
import { AttractionsContext } from './providers/AttractionsContext';

// STYLES \\
import './styles/Main.scss';
import CreatePackage from './components/CreatePackage';

const App = () => {

  const { user } = useContext(UserContext);
  const { featuredAttractionsData, isLoadingFeatured, favAttractionsData, isLoadingFav, attractionsByCityData, isLoadingattractionsByCity, attractionsFilteredList, isLoadingAttractionsFilteredList } = useContext(AttractionsContext);
  const attractionsLoading = isLoadingFeatured === true && isLoadingattractionsByCity ? true : false;



  const getUserGreeting = (email) => {
    const userHandle = email.split('@');
    return userHandle[0];
  };



  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoginAlertModal />
        <DescModal />
        <Routes>
          <Route path="/" element={<CategoryFilters getUserGreeting={getUserGreeting} />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/packages" element={<CreatePackage />} />
          <Route path="/days/:packageId" element={<PackageDays />} />
          {/* Add more routes here */}
          {user &&
            <Route path={`/favorites/${user.id}`} element={isLoadingFav === true ? <LoadingSpinner /> : <ActivitiesList attractions={favAttractionsData} pageTitle={"Your Favorite Experiences"} />} />
          }










        </Routes>
      </Router>
    </div >
  );
};

export default App;
