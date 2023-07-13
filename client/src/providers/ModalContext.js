import React, { createContext, useState } from 'react';
import useModalLoginAlert from '../hooks/modals/useModalLoginAlert';
import UseModalCategoryFilter
  from '../hooks/modals/UseModalCategoryFilter';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

  const { isOpenLoginAlert, handleOpenModalLoginAlert, handleCloseModalLoginAlert } = useModalLoginAlert();
  const { isOpenCategoryFilter, handleOpenModalCategoryFilter, handleCloseModalCategoryFilter,
    filterName, setFilterName } = UseModalCategoryFilter();

  return (
    <ModalContext.Provider value={{
      isOpenLoginAlert,
      handleOpenModalLoginAlert,
      handleCloseModalLoginAlert,
      isOpenCategoryFilter,
      handleOpenModalCategoryFilter,
      handleCloseModalCategoryFilter,
      filterName,
      setFilterName
    }}>
      {children}
    </ModalContext.Provider>
  );

};


export default ModalContext;
