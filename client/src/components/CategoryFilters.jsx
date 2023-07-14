import React, { useContext } from 'react';
import CategoryFilterButton from './CategoryFiltersButton';
import categories from '../mocks/categories.js';
import CategoryFilterModal from './modals/CategoryFilterModal';
import { AttractionsContext } from '../providers/AttractionsContext';

const CategoryFilters = () => {

  const categoriesList = categories.map(
    (category, index) => (<CategoryFilterButton icon={category.icon} name={category.name} key={index} />));

  const { fetchData, city, setFilters } = useContext(AttractionsContext);

  const handleFilterSubmit = () => {
    //when user submits filters then add city to the list
    
    // remove previous rating filter (if exists)
    setFilters(prevState => prevState.filter(
      (item) => {
        if (typeof item === 'object' && 'City' in item) {
          console.log("item to exclude: ", item);
          return false; // Exclude objects with the specified key
        }
        return true; // Include strings and other objects
      }
    ));
    //add new City
    setFilters(prevState => [...prevState, { 'City': city }]);

    fetchData();

  };

  return (
    <>
      <CategoryFilterModal />
      <nav className="nav-category">
        <div className="nav-category__menu">
          {categoriesList}
        </div>

        <button className="nav-category__filter-btn"
          onClick={handleFilterSubmit}>
          <i className="fa-solid fa-bars"></i>
          <h3> Filter</h3>
        </button>
      </nav>

    </>

  );


};

export default CategoryFilters;