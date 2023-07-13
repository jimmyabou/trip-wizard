import React, { useState } from 'react';

const UseModalCategoryFilter = () => {

  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);

  const handleOpenModalCategoryFilter = () => {
    setIsOpenCategoryFilter(true);
  };

  const handleCloseModalCategoryFilter = () => {
    setIsOpenCategoryFilter(false);
  };

  return {
    isOpenCategoryFilter,
    handleOpenModalCategoryFilter,
    handleCloseModalCategoryFilter
  };
};

export default UseModalCategoryFilter;

