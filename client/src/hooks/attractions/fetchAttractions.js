import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractions = () => {
  const [attractionsData, setAttractionsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/attractions');
        setAttractionsData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return {
    attractionsData,
    isLoading,
    error
  };



};

export default FetchAttractions;