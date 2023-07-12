import React, { createContext, useState } from 'react';
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDescOpen, setIsDescOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpen(false);
  };

  const handleOpenDescModal = () => {
    setIsDescOpen(true);
  };

  const handleCloseDescModal = () => {
    setIsDescOpen(false);
  };


  return (
    <ModalContext.Provider value={{ isOpen, isDescOpen, handleOpenLoginModal, handleCloseLoginModal, handleOpenDescModal, handleCloseDescModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
