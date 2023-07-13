import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../providers/ModalContext';
import CustomizedSlider from './CustomizedSlider';


const CategoryFilterModal = () => {

  const { handleCloseModalCategoryFilter, isOpenCategoryFilter, filterName } = useContext(ModalContext);


  return (
    <div>
      <Modal isOpen={isOpenCategoryFilter} onRequestClose={handleCloseModalCategoryFilter} className="modal__filter-alert">
        <h2> Filter by {filterName} </h2>
        <CustomizedSlider name={filterName}/>
        <button onClick={handleCloseModalCategoryFilter} style={{ height: "2rem", width: "5rem", fontSize: "0.7rem", color: "#FFF" }}>DONE</button>
      </Modal>
    </div >
  );
};


export default CategoryFilterModal;
