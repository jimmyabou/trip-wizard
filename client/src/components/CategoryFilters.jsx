import React from 'react';
import CategoryFilterButton from './CategoryFiltersButton';
import categories from '../mocks/categories.js';
import CategoryFilterModal from './modals/CategoryFilterModal';


const CategoryFilters = () => {

  const categoriesList = categories.map(
    (category, index) => (<CategoryFilterButton icon={category.icon} name={category.name} key={index} />));

  return (
    <>
      <CategoryFilterModal />
      <nav className="nav-category">
        <div className="nav-category__menu">
          {categoriesList}
        </div>

        <button className="nav-category__filter-btn">
          <i className="fa-solid fa-bars"></i>
          <h3> Filters</h3>
        </button>
      </nav>

    </>

  );


};

export default CategoryFilters;