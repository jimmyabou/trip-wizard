import React, { createContext, useState } from 'react';
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpen(false);
  };


  return (
    <ModalContext.Provider value={{ isOpen, handleOpenLoginModal, handleCloseLoginModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
