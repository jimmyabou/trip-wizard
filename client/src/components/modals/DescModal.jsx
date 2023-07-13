import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ModalContext from '../../providers/ModalContext';
import DescModalFav from './DescModalFav';

const DescModal = () => {

  const { handleCloseDescModal, isDescOpen, selectedAttractionId } = useContext(ModalContext);
  const [attractionData, setAttractionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttraction = async () => {
      if (selectedAttractionId) {
        try {
          const response = await axios.get(`/attractions/attraction/${selectedAttractionId}`);
          setAttractionData(response.data.attraction);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
    };
    fetchAttraction();
  }, [selectedAttractionId]);


  return (
    <div>
      <Modal isOpen={isDescOpen} onRequestClose={handleCloseDescModal} className="modal__desc" style={style.sizing}>
        {attractionData ? ( // check if attractionData is not null before rendering the content
          <>
            <button onClick={handleCloseDescModal} className='modal__close-button'>X</button>
            <img src={attractionData.pictures[0]} alt="" style={{ width: "100%", objectFit: "cover", borderRadius: "15px", position: "relative", marginTop: "1rem" }} />
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
                  <button id="reserve">
                    Reserve
                  </button>
                </div>
              </div>
            </footer>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Modal>
    </div >
  );

};

export default DescModal;
