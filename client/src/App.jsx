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
import PackageDetails from './components/packages/PackageDetails';
// CONTEXTS \\
import UserContext from './providers/UserContext';
import { AttractionsContext } from './providers/AttractionsContext';

// STYLES \\
import './styles/Main.scss';
import CreatePackage from './components/packages/CreatePackage';

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
          <Route path="/packages/:packageId/days" element={<PackageDetails />} />
          {/* Add more routes here */}
          {user &&
            <Route path={`/favorites/${user.id}`} element={isLoadingFav === true ? <LoadingSpinner /> : <ActivitiesList attractions={favAttractionsData} username={user ? getUserGreeting(user.email) : null}
              pageTitle={"Your Favorite Experiences"} />} />
          }










        </Routes>
      </Router>
    </div >
  );
};

export default App;




// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// // COMPONENTS \\
// import UserForm from './components/UserForm';
// import Navbar from './components/NavBar';
// import LoginForm from './components/LoginForm';
// import ActivitiesList from './components/ActivitiesList';
// import LoginAlertModal from './components/modals/LoginAlertModal';
// import DescModal from './components/modals/DescModal';
// import LoadingSpinner from './components/Loading';
// // CONTEXTS \\
// import UserContext from './providers/UserContext';
// import { AttractionsContext } from './providers/AttractionsContext';
// import PackageDetails from './components/PackageDetails';

// // STYLES \\
// import './styles/Main.scss';
// import CreatePackage from './components/CreatePackage';

// const App = () => {

//   const { user } = useContext(UserContext);
//   const { featuredAttractionsData, isLoadingFeatured, favAttractionsData, isLoadingFav, attractionsByCityData, isLoadingattractionsByCity } = useContext(AttractionsContext);
//   const attractionsLoading = isLoadingFeatured === true && isLoadingattractionsByCity ? true : false;
//   const getUserGreeting = (email) => {
//     const userHandle = email.split('@');
//     return userHandle[0];
//   };


//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <LoginAlertModal />
//         <DescModal />
//         <Routes>
//           <Route path="/" element={
//             attractionsLoading === true ? <LoadingSpinner /> :
//               attractionsByCityData && attractionsByCityData.attractions.length === 0 ?
//                 <ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Helping you find your way..."} username={user ? getUserGreeting(user.email) : null} /> :
//                 attractionsByCityData && <ActivitiesList attractions={attractionsByCityData.attractions} pageTitle={`Your experiences in ${attractionsByCityData.attractions[0].city} await....`} />
//           } />
//           <Route path="/register" element={<UserForm/>} />
//           <Route path="/login" element={<LoginForm/>} />
//           <Route path="/packages" element={<CreatePackage/>} />
//           <Route path="/packages/:packageId/days" element={<PackageDetails />} />
//           {/* Add more routes here */}
//           {user &&
//             <Route path={`/favorites/${user.id}`} element={isLoadingFav === true ? <LoadingSpinner /> : <ActivitiesList attractions={favAttractionsData} pageTitle={"Your Favorite Experiences"} />} />
//           }










//         </Routes>
//       </Router>
//     </div >
//   );
// };

// export default App;
