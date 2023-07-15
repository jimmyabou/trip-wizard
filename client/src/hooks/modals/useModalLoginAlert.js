import React, { useState } from 'react';

const useModalLoginAlert = () => {

  const [isOpenLoginAlert, setIsOpenLoginAlert] = useState(false);

  const handleOpenModalLoginAlert = () => {
    setIsOpenLoginAlert(true);
  };

  const handleCloseModalLoginAlert = () => {
    setIsOpenLoginAlert(false);
  };

  return {
    isOpenLoginAlert,
    handleOpenModalLoginAlert,
    handleCloseModalLoginAlert
  };
};

export default useModalLoginAlert;

