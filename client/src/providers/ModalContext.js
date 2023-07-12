import React, { createContext, useState, useEffect } from 'react';
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [selectedAttractionId, setSelectedAttractionId] = useState(null);

  const handleOpenLoginModal = () => {
    setIsOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpen(false);
  };

  const handleOpenDescModal = (attraction_id) => {
    setIsDescOpen(true);
    setSelectedAttractionId(attraction_id);
  };

  const handleCloseDescModal = () => {
    setIsDescOpen(false);
    setSelectedAttractionId(null);
  };


  return (
    <ModalContext.Provider value={{ isOpen, isDescOpen, handleOpenLoginModal, handleCloseLoginModal, handleOpenDescModal, handleCloseDescModal, selectedAttractionId }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
