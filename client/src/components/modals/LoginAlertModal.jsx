import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../providers/ModalContext';

const LoginAlertModal = () => {

  const { handleCloseModal, isOpen } = useContext(ModalContext);

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <h2> You must be logged in to access this feature. </h2>
        <a href="/login">Login</a>
        <a href="/register">Create an Account</a>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default LoginAlertModal;
