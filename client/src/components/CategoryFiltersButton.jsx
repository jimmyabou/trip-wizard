import React, { useContext, useState } from 'react';

import { AttractionsContext } from '../providers/AttractionsContext';
import ModalContext from '../providers/ModalContext';



const CategoryFilterButton = (props) => {
  const { name } = props;

  const [active, setActive] = useState(false); //change background color of filter btns
  const { handleOpenModalCategoryFilter, setFilterName } = useContext(ModalContext);
  const { city, setFilters, filters } = useContext(AttractionsContext);

  const handleFilter = (name) => {
    setActive(!active);
    //ratings and budget have modals pop up
    if (['Rating', 'Budget'].includes(name) && active === false) {
      setFilterName(name);
      handleOpenModalCategoryFilter();
    } else if (active === false) {
      setFilters(prevState => [...prevState, name]);
    } else { //remove filter from list if deactivated
      setFilters(prevState => prevState.filter(el => el !== name));
    }
  };

  const checkEleInFilters = (arr, name) => {
    for (const element of arr) {
      if (typeof element === 'object' && name in element) {
        return true;
      } else if (element === name) {
        return true;
      }
    }
    return false;
  };

  return (

    <button className="nav-category__menu-item"
      onClick={() => handleFilter(name)}
      style={{ backgroundColor: checkEleInFilters(filters, name) ? "#51D4BF" : "white" }}
    >
      <i className={props.icon}></i>
      <h4>{props.name}</h4>
    </button>


  );


};

export default CategoryFilterButton;