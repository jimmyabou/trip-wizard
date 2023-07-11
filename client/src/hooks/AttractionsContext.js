import React, { createContext, useContext, useEffect } from 'react';
import FetchAttractions from './attractions/fetchAttractions';
import FetchFavAttractions from './attractions/fetchFavAttractions';
import FetchFeaturedAttractions from './attractions/fetchFeaturedAttractions';
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
