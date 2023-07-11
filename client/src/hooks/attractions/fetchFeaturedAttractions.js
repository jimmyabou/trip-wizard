import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchFeaturedAttractions = () => {
  const [featuredAttractionsData, setfeaturedAttractionsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/attractions/featured');
        setfeaturedAttractionsData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    featuredAttractionsData,
    isLoading,
    error
  };



};

export default FetchFeaturedAttractions;