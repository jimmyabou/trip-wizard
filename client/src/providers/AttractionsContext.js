import React, { createContext, useContext } from 'react';
import axios from 'axios';
import FetchAttractions from '../hooks/attractions/fetchAttractions';
import FetchFavAttractions from '../hooks/attractions/fetchFavAttractions';
import FetchFeaturedAttractions from '../hooks/attractions/fetchFeaturedAttractions';
import UserContext from './UserContext';

export const AttractionsContext = createContext();

const AttractionsProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const { attractionsData, isLoading: isLoadingAttractions, error: attractionsError } = FetchAttractions();
  const { favAttractionsData, isLoading: isLoadingFav, error: favError, triggerFetch } = FetchFavAttractions({ user });
  const { featuredAttractionsData, isLoading: isLoadingFeatured, error: featuredError } = FetchFeaturedAttractions();

  const handleFavAttraction = async (attraction_id) => {
    const favData = {
      user_id: user.id,
      attraction_id
    };

    if (user) {
      try {
        await axios.post(`/favorites/${user.id}`, favData);
        triggerFetch();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Must be logged in to favorite data");
    }
  };


  return (
    <AttractionsContext.Provider value={{
      attractionsData,
      isLoadingAttractions,
      attractionsError,
      favAttractionsData,
      isLoadingFav,
      favError,
      featuredAttractionsData,
      isLoadingFeatured,
      featuredError,
      handleFavAttraction
    }}>
      {children}
    </AttractionsContext.Provider>
  );
};

export default AttractionsProvider;
