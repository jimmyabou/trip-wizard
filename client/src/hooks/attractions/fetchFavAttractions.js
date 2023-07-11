import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchFavAttractions = ({ userId }) => {
  const [favAttractionsData, setFavAttractionsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`/favorites/${userId}`);
          console.log(response.data);
          setFavAttractionsData(response.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchFavData();
  }, [userId]);

  return {
    favAttractionsData,
    isLoading,
    error
  };
};

export default FetchFavAttractions;
