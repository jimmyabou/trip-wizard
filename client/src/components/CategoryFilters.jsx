import React, { useContext } from 'react';
import CategoryFilterButton from './CategoryFiltersButton';
import categories from '../mocks/categories.js';
import CategoryFilterModal from './modals/CategoryFilterModal';
import { AttractionsContext } from '../providers/AttractionsContext';

const CategoryFilters = () => {

  const categoriesList = categories.map(
    (category, index) => (<CategoryFilterButton icon={category.icon} name={category.name} key={index} />));

  const { fetchData } = useContext(AttractionsContext);

  const handleFilterSubmit = () => {
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