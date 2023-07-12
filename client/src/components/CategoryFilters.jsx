import React from 'react';


// quick filters. clicking one filters displayed attrctions
// (that is selected city or featured) by that category
const CategoryFilters = () => {




  return (
    <nav class="nav-category">
      <div class="nav-category__menu">

        <button class="nav-category__menu-item">
          <i class="fa-solid fa-binoculars"></i>
          <h4>Sightsee</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-solid fa-star"></i>
          <h4>Rating</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-solid fa-piggy-bank"></i>
          <h4>Budget</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-sharp fa-solid fa-wine-glass"></i>
          <h4>Tasting</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-solid fa-sack-dollar"></i>
          <h4>Luxury</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-solid fa-landmark"></i>
          <h4>Cultural</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-solid fa-person-walking"></i>
          <h4>Walking</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-solid fa-city"></i>
          <h4>City</h4>
        </button>

        <button class="nav-category__menu-item">
          <i class="fa-sharp fa-solid fa-utensils"></i>
          <h4>Dining</h4>
        </button>
      </div>

      <button class="nav-category__filter-btn">
        <i class="fa-solid fa-bars"></i>
        <h3> Filters</h3>
      </button>
    </nav>
  );


};

export default CategoryFilters;