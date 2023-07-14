import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// COMPONENTS \\
import UserForm from './components/UserForm';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ActivitiesList from './components/ActivitiesList';
import CategoryFilters from './components/CategoryFilters';
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

  function shuffle(arr) {
    const shuffledArray = [...arr];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }

    return shuffledArray;
  }

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
          <Route path="/" element={<CategoryFilters shuffle={shuffle} getUserGreeting={getUserGreeting}/>} />
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
