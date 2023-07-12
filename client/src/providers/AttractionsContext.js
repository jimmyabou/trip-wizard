import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import FetchAttractions from '../hooks/attractions/fetchAttractions';
import FetchFavAttractions from '../hooks/attractions/fetchFavAttractions';
import FetchFeaturedAttractions from '../hooks/attractions/fetchFeaturedAttractions';
import FetchAttractionCities from '../hooks/attractions/fetchAttractionCities';
import FetchAttractionByCity from '../hooks/attractions/fetchAttractionsByCity';
import UserContext from './UserContext';

export const AttractionsContext = createContext();

const AttractionsProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const { attractionsData, isLoading: isLoadingAttractions, error: attractionsError } = FetchAttractions();
  const { favAttractionsData, isLoading: isLoadingFav, error: favError, triggerFetch, favAttractionIds } = FetchFavAttractions({ user });
  const { featuredAttractionsData, isLoading: isLoadingFeatured, error: featuredError } = FetchFeaturedAttractions();
  const { attractionsCitiesList, isLoading: isLoadingAttractionCities, error: attractionCitiesError } = FetchAttractionCities();
  const { attractionsByCityData, isLoading: isLoadingattractionsByCity, error: attractionsByCityError, setCity, city } = FetchAttractionByCity();


  const handleFavAttraction = async (attraction_id) => {
    const favData = {
      user_id: user.id,
      attraction_id
    };

    if (user && !favAttractionIds.includes(attraction_id)) { // Check if user exists and if the attraction is not already favorited
      try {
        await axios.post(`/favorites/${user.id}`, favData);
        triggerFetch();
      } catch (error) {
        console.error(error);
      }
    } else if (user && favAttractionIds.includes(attraction_id)) { // Check if user exists and if the attraction is already favorited
      try {
        await axios.delete(`/favorites/${user.id}/${attraction_id}`);
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
      attractionsCitiesList,
      isLoadingAttractionCities,
      attractionCitiesError,
      attractionsByCityData,
      isLoadingattractionsByCity,
      attractionsByCityError, 
      setCity,
      city,
      handleFavAttraction,
      favAttractionIds,
    }}>
      {children}
    </AttractionsContext.Provider>
  );
};

export default AttractionsProvider;
