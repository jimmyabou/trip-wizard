import React, { createContext, useState } from 'react';
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
    console.log('handleOpenDescModal called with:', attraction_id);
    setIsDescOpen(true);
    console.log('handleOPenDescModal setting isopn', isDescOpen);
    setSelectedAttractionId(attraction_id);
    console.log('selected attr id', selectedAttractionId);
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
