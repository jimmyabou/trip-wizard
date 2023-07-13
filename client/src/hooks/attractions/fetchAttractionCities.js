import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionCities = () => {
  const [attractionsCitiesList, setattractionsCitiesList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/attractions/cities');
        setattractionsCitiesList(response.data.attractions.map(
          attractionCity => ({ label: attractionCity.city })
        ));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return {
    attractionsCitiesList,
    isLoading,
    error
  };



};

export default FetchAttractionCities;