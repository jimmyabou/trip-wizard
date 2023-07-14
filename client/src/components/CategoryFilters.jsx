import React, { useContext } from 'react';
import CategoryFilterButton from './CategoryFiltersButton';
import categories from '../mocks/categories.js';
import CategoryFilterModal from './modals/CategoryFilterModal';
import { AttractionsContext } from '../providers/AttractionsContext';

const CategoryFilters = () => {

  const categoriesList = categories.map(
    (category, index) => (<CategoryFilterButton icon={category.icon} name={category.name} key={index} />));

  const { fetchData, city, setFilters} = useContext(AttractionsContext);

  const handleFilterSubmit = () => {
    //when user submits filters then add city to the list
    fetchData(city);

  };

  const handleClear = () => {
    console.log("clear filters");
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
            <i class="fa-solid fa-xmark"></i>
            <h3>Clear</h3>
          </button>
        </div>
      </nav>

    </>

  );


};

export default CategoryFilters;