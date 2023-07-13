import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../providers/ModalContext';

const LoginAlertModal = () => {

  const { handleCloseLoginModal, isOpen } = useContext(ModalContext);

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={handleCloseLoginModal} className="modal__login-alert" style={{ width: "80%", maxWidth: "500px" }}>
        <h2> You must be logged in to access this feature. </h2>
        <div className='login-alert__links'>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
        <button onClick={handleCloseLoginModal} style={{ height: "2rem", width: "5rem", fontSize: "0.7rem", color: "#FFF" }}>DONE</button>
      </Modal>
    </div >
  );
};

export default LoginAlertModal;
