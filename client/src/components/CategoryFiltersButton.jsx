import React, { useContext, useState } from 'react';

import { AttractionsContext } from '../providers/AttractionsContext';
import ModalContext from '../providers/ModalContext';



const CategoryFilterButton = (props) => {

  const { city } = useContext(AttractionsContext);
  const [active, setActive] = useState(false); //change background color of filter btns
  const { handleOpenModalCategoryFilter } = useContext(ModalContext);



  const handleFilter = (name) => {
    setActive(!active);
    if (['Rating', 'Budget'].includes(name) && active === false) {
      console.log("name", name);
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