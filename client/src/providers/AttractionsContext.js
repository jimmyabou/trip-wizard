import React, { createContext, useContext, useEffect } from 'react';
import FetchAttractions from '../hooks/attractions/fetchAttractions';
import FetchFavAttractions from '../hooks/attractions/fetchFavAttractions';
import FetchFeaturedAttractions from '../hooks/attractions/fetchFeaturedAttractions';
import UserContext from './UserContext';

export const AttractionsContext = createContext();

const AttractionsProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const { attractionsData, isLoading: isLoadingAttractions, error: attractionsError } = FetchAttractions();
  const { favAttractionsData, isLoading: isLoadingFav, error: favError } = FetchFavAttractions({ user });
  const { featuredAttractionsData, isLoading: isLoadingFeatured, error: featuredError } = FetchFeaturedAttractions();

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
      featuredError
    }}>
      {children}
    </AttractionsContext.Provider>
  );
};

export default AttractionsProvider;
