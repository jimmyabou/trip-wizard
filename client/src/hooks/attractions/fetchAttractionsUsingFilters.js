import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionUsingFilters = () => {


  const [filters, setFilters] = useState([]); //filters to use. 


 
  const [attractionsFilteredList, setAttractionsFilteredList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const transformFiltersToParams = (filters) => {

    const params = {
      categories: [],
    };

    filters.forEach((item) => {
      if (typeof item === 'string') {
        params.categories.push(item);
      } else if (typeof item === 'object') {
        let [key, value] = Object.entries(item)[0];
        key = key.toLocaleLowerCase();
        if (key === 'budget') {
          key = 'price';
        }
        params[key] = value;
      }
    });
    return params;
  };


  const fetchData = async () => {
    try {
      const response = await axios.get('/attractions/filtered', {
        params: transformFiltersToParams(filters)
      });
      setAttractionsFilteredList(response.data.attractions);
      console.log("response", response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };


  return {
    attractionsFilteredList,
    isLoading,
    error,
    filters,
    setFilters,
    fetchData
  };



};

export default FetchAttractionUsingFilters;