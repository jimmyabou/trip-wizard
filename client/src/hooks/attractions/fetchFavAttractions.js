import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchFavAttractions = ({ user }) => {
  const [favAttractionsData, setFavAttractionsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavData = async () => {
      if (user) {
        try {
          const response = await axios.get(`/favorites/${user.id}`);
          setFavAttractionsData(response.data.attractions);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setFavAttractionsData(null);
      }
    };

    fetchFavData();
  }, [user]);

  return {
    favAttractionsData,
    isLoading,
    error
  };
};

export default FetchFavAttractions;
