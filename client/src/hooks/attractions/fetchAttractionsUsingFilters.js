import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionUsingFilters = () => {


  const [filters, setFilters] = useState([]); //filters to use
  console.log("filters: ", filters);

  //let params = { foo: [5, 2] } axios.get('path/to/api/',{params})

  const [attractionsFilteredList, setAttractionsFilteredList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    try {
      const response = await axios.get('/attractions/cities');
      setAttractionsFilteredList(response.data.attractions.map(
        attractionCity => ({ label: attractionCity.city })
      ));
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