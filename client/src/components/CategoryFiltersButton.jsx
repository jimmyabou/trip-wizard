import React, { useContext, useState } from 'react';

import { AttractionsContext } from '../providers/AttractionsContext';
import ModalContext from '../providers/ModalContext';



const CategoryFilterButton = (props) => {

  const { city } = useContext(AttractionsContext);
  const [active, setActive] = useState(false); //change background color of filter btns
  const { handleOpenModalCategoryFilter, setFilterName } = useContext(ModalContext);

// this component needs to update an arry of requested filters to be sent to FetchAttractionUsingFilters
// FetchAttractionUsingFilters then sends req to backend. 
// returned data is displayed.

  const handleFilter = (name) => {
    setActive(!active);
    if (['Rating', 'Budget'].includes(name) && active === false) {
      setFilterName(name);
      handleOpenModalCategoryFilter();
    }

  };



  return (

    <button className="nav-category__menu-item"
      onClick={() => handleFilter(props.name)}
      style={{ backgroundColor: active ? "#51D4BF" : "white" }}
    >
      <i className={props.icon}></i>
      <h4>{props.name}</h4>
    </button>


  );


};

export default CategoryFilterButton;