import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../providers/ModalContext';
import axios from 'axios';

const DescModal = () => {

  const { handleCloseDescModal, isDescOpen, selectedAttractionId } = useContext(ModalContext);
  //const { attractionData, isLoadingAttractionbyId } = useContext(AttractionsContext);
  const [attractionData, setAttractionData] = useState(null);

  useEffect(() => {
    const fetchAttraction = async () => {
      if (selectedAttractionId) {
        try {
          const response = await axios.get(`/attractions/attraction/${selectedAttractionId}`);
          setAttractionData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchAttraction();
  }, [selectedAttractionId]);


  return (
    <div>
      <Modal isOpen={isDescOpen} onRequestClose={handleCloseDescModal}>
        {attractionData ? ( // check if attractionData is not null before rendering the content
          <>
            <div className="activity__details">
              <div className="activity__details-info">
                <i className="fa-solid fa-location-dot"></i>
                <h3>{attractionData.city}, {attractionData.country}</h3>
              </div>
              <div className='activity__details-right'>
                <div className="activity__details-info">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <h3> {attractionData.rating} </h3>
                </div>
                <div className="activity__details-info">
                  <i className="fa-regular fa-hourglass-half"></i>
                  <h3> {attractionData.duration} </h3>
                </div>
              </div>
            </div>
            <h2> {attractionData.name} </h2>
            <div className="activity__details-more">
              <p> {attractionData.description}.</p>
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
            <button onClick={handleCloseDescModal} style={{ height: "2rem", width: "5rem", fontSize: "0.7rem", color: "#FFF" }}>DONE</button>
          </>
        ) : (
          <p>Loading...</p> // Show a loading message while the data is being fetched
        )}
      </Modal>
    </div>
  );

};

export default DescModal;
