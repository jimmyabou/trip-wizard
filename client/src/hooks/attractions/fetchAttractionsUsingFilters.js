import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionUsingFilters = () => {


  const [filters, setFilters] = useState([]); //filters to use
  const [submit, setSubmit] = useState('false'); // run axios request

  console.log("filters: ", filters);
  console.log("submit: ", submit);

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
      setSubmit('false');
    } catch (error) {
      setError(error);
      setIsLoading(false);
      setSubmit('false');
    }
  };



  return {
    attractionsFilteredList,
    isLoading,
    error,
    filters,
    setFilters,
    submit,
    setSubmit,
    fetchData
  };



};

export default FetchAttractionUsingFilters;