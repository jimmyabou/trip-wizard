import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ModalContext from '../../providers/ModalContext';
import DescModalFav from './DescModalFav';
import LoadingSpinner from '../Loading';

const DescModal = () => {

  const { handleCloseDescModal, isDescOpen, selectedAttractionId } = useContext(ModalContext);
  const [attractionData, setAttractionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [modalPictureIndex, setModalPictureIndex] = useState(0);

  useEffect(() => {
    setImageLoading(true);
    const fetchAttraction = async () => {
      if (selectedAttractionId) {
        try {
          const response = await axios.get(`/attractions/attraction/${selectedAttractionId}`);
          setAttractionData(response.data.attraction);
          setLoading(false);
          setImageLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
          setImageLoading(false);
        }
      }
    };
    fetchAttraction();
  }, [selectedAttractionId]);

  let modalPictures = [];

  if (attractionData) {
    modalPictures = attractionData.pictures;
  }

  const handleModalNextPicture = () => {
    if (modalPictures.length > 1 && modalPictureIndex < modalPictures.length - 1) {
      setModalPictureIndex(modalPictureIndex + 1);
    }
  };

  const handleModalPrevPicture = () => {
    if (modalPictureIndex > 0) {
      setModalPictureIndex(modalPictureIndex - 1);
    }
  };


  return (
    <div>
      <Modal isOpen={isDescOpen} onRequestClose={handleCloseDescModal} className="modal__desc">
        {attractionData ? (
          <>
            <button onClick={handleCloseDescModal} className='modal__close-button'>X</button>
            <div className='modal__image-container' style={{ position: "relative" }}>
              {imageLoading ? (
                <LoadingSpinner />
              ) : (
                <img src={modalPictures[modalPictureIndex]} alt=""
                  style={{ width: "100%", objectFit: "cover", borderRadius: "15px", marginTop: "1rem" }}
                  onLoad={() => setImageLoading(false)}
                />
              )}
              {modalPictures.length > 1 &&
                <div className='modal__pictures-controller'>
                  <i className={`fa-solid fa-circle-chevron-right fa-rotate-180 ${modalPictureIndex > 0 ? 'active-icon' : 'inactive-icon'}`} onClick={handleModalPrevPicture}></i>
                  <i className={`fa-solid fa-circle-chevron-right ${modalPictureIndex < modalPictures.length - 1 ? 'active-icon' : 'inactive-icon'}`} onClick={handleModalNextPicture}></i>
                </div>}
            </div>
            <h2 style={{ marginBottom: "0.3rem", fontSize: "1.5rem" }}> {attractionData.name} </h2 >
            <DescModalFav attraction_id={attractionData.attraction_id} />
            <div className="modal__activity-details">
              <div className="activity__details-info">
                <i className="fa-solid fa-location-dot"></i>
                <h3>{attractionData.city}, {attractionData.country}</h3>
              </div>
              <div className="activity__details-info">
                <i className="fa-regular fa-hourglass-half"></i>
                <h3> {attractionData.duration} </h3>
              </div>
              <div className="activity__details-info">
                <i className="fa-solid fa-dollar-sign"></i>
                <h3> {attractionData.price} </h3>
              </div>
              <div className="activity__details-info">
                <i className="fa-solid fa-thumbs-up"></i>
                <h3> {attractionData.rating} </h3>
              </div>
            </div>
            <footer>
              <div className="modal__activity-details__more">
                <p> {attractionData.description}</p>
                <div className="activity__details-booking-info">
                  <div className="activity__details-price">
                    <p>from </p>
                    <span>${attractionData.price}</span>
                    <p>per adult</p>
                  </div>
                  <a href={attractionData.booking_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button id="reserve">
                      Reserve
                    </button>
                  </a>
                </div>
              </div>
            </footer>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Modal>
    </div >
  );

};

export default DescModal;
