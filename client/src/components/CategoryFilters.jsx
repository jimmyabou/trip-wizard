import React, { useContext, useState } from 'react';

import categories from '../mocks/categories.js';

// COMPONENTS \\
import CategoryFilterButton from './CategoryFiltersButton';
import CategoryFilterModal from './modals/CategoryFilterModal';
import LoadingSpinner from './Loading.jsx';
import ActivitiesList from './ActivitiesList.jsx';

// CONTEXTS \\
import { AttractionsContext } from '../providers/AttractionsContext';
import UserContext from '../providers/UserContext.js';


const CategoryFilters = (props) => {
  const { getUserGreeting } = props;


  const { user } = useContext(UserContext);
  const { featuredAttractionsData, isLoadingFeatured,
    favAttractionsData, isLoadingFav,
    attractionsByCityData, isLoadingattractionsByCity,
    attractionsFilteredList, setAttractionsFilteredList, isLoadingAttractionsFilteredList,
    fetchData, city, setFilters
  } = useContext(AttractionsContext);

  //conditional logic
  const attractionsLoading = isLoadingFeatured === true && isLoadingattractionsByCity && isLoadingAttractionsFilteredList ? true : false;
  const haveFilteredByCategoryData = attractionsFilteredList && attractionsFilteredList.attractions.length > 0;
  const haveAttractionsByCityData = !(attractionsByCityData && attractionsByCityData.attractions.length === 0);

  const categoriesList = categories.map(
    (category, index) => (<CategoryFilterButton icon={category.icon} name={category.name} key={index} />));


  const handleFilterSubmit = () => {
    //when user submits filters then add city to the list
    fetchData(city);
  };

  const handleClear = () => {
    setFilters([]);
    setAttractionsFilteredList(null);
  };


  return (
    <>
      <CategoryFilterModal />
      <nav className="nav-category">
        <div className="nav-category__menu">
          {categoriesList}
        </div>

        <div>
          <button className="nav-category__filter-btn"
            onClick={handleFilterSubmit}>
            <i className="fa-solid fa-bars"></i>
            <h3> Filter</h3>
          </button>
          <button className="nav-category__filter-btn"
            onClick={handleClear}>
            <i className="fa-solid fa-xmark"></i>
            <h3>Clear</h3>
          </button>
        </div>
      </nav>
      {
        attractionsLoading === true ? <LoadingSpinner /> :
          // if haveFilteredByCategoryData and  attractionsFiltered data then display it.
          (haveFilteredByCategoryData && attractionsFilteredList) ? <ActivitiesList attractions={attractionsFilteredList.attractions} pageTitle={`Your filtered experiences await...`} /> :

            //if haveAttractionsByCityData and attractionsByCityData the display it
            (haveAttractionsByCityData && attractionsByCityData) ? <ActivitiesList attractions={attractionsByCityData.attractions} pageTitle={`Your experiences in ${attractionsByCityData.attractions[0].city} awaits...`} /> :

              // display featured
              <ActivitiesList attractions={featuredAttractionsData.attractions} pageTitle={"Helping you find your way..."} username={user ? getUserGreeting(user.email) : null} />

      }

    </>

  );


};

export default CategoryFilters;