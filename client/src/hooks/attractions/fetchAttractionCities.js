import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionCities = () => {
  const [attractionsCitiesData, setAttractionsCitiesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/attractions/cities');
        console.log("reponsedata", response.data);
        setAttractionsCitiesData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return {
    attractionsCitiesData,
    isLoading,
    error
  };



};

export default FetchAttractionCities;