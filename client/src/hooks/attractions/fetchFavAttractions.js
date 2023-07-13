import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchFavAttractions = ({ user }) => {
  const [favAttractionsData, setFavAttractionsData] = useState(null);
  const [favAttractionIds, setFavAttractionIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);

  const triggerFetch = () => {
    setTrigger(!trigger);
  };

  useEffect(() => {
    const fetchFavData = async () => {
      if (user) {
        try {
          const response = await axios.get(`/favorites/${user.id}`);
          setFavAttractionsData(response.data.attractions);
          const newAttractionIds = response.data.attractions.map(attraction => attraction.attraction_id);
          setFavAttractionIds(newAttractionIds);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setFavAttractionsData(null);
        setFavAttractionIds([]);
      }
    };

    fetchFavData();
  }, [user, trigger]);

  return {
    favAttractionsData,
    favAttractionIds,
    isLoading,
    error,
    triggerFetch
  };
};

export default FetchFavAttractions;
