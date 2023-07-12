import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionById = ({ attractionId }) => {
  const [attractionData, setAttractionData] = useState(null);

  useEffect(() => {
    const fetchAttraction = async () => {
      if (selectedAttractionId) {
        try {
          const response = await axios.get(`/attractions/attraction/${attractionId}`);
          setAttractionData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchAttraction();
  }, [attractionId]);



  return {
    attractionData
  };



};

export default FetchAttractionById;