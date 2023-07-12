import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionByCity = () => {

  const [city, setCity] = useState("city");
  const [attractionsByCityData, setAttractionsByCity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/attractions/${city}`);
        setAttractionsByCity(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]); 


  return {
    attractionsByCityData,
    isLoading,
    error, 
    setCity,
    city
  };



};

export default FetchAttractionByCity;