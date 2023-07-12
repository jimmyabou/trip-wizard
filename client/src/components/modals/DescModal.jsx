import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../providers/ModalContext';

const DescModal = ({ attraction }) => {

  const { handleCloseDescModal, isDescOpen } = useContext(ModalContext);

  return (
    <div>
      <Modal isOpen={isDescOpen} onRequestClose={handleCloseDescModal} className="modal__login-alert">
        <div className="activity__details">
          <div className="activity__details-info">
            <i className="fa-solid fa-location-dot"></i>
            <h3>{attraction.city}, {attraction.country}</h3>
          </div>
          <div className='activity__details-right'>
            <div className="activity__details-info">
              <i className="fa-solid fa-thumbs-up"></i>
              <h3> {attraction.rating} </h3>
            </div>
            <div className="activity__details-info">
              <i className="fa-regular fa-hourglass-half"></i>
              <h3> {attraction.duration} </h3>
            </div>
          </div>
        </div>
        <h2> {attraction.name} </h2>
        <div className="activity__details-more">
          <p> {attraction.description}.</p>
          <div className="activity__details-booking-info">
            <div className="activity__details-price">
              <p>from </p>
              <span>${attraction.price}</span>
              <p>per adult</p>
            </div>
            <button id="reserve">
              Reserve
            </button>
          </div>
        </div>
        <button onClick={handleCloseDescModal} style={{ height: "2rem", width: "5rem", fontSize: "0.7rem", color: "#FFF" }}>DONE</button>
      </Modal>
    </div >
  );
};

export default DescModal;
