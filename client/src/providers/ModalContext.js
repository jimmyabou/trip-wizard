import React, { createContext, useState } from 'react';
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleOpenModal, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
