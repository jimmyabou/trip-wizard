import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AttractionsContext } from '../../providers/AttractionsContext';

const FetchAttractionUsingFilters = () => {

  // filters \\
  const [filters, setFilters] = useState([]);
  const [submit, setSubmit] = useState('false');
  console.log("filters: ", filters);


  //let params = { foo: [5, 2] } axios.get('path/to/api/',{params})

  const [attractionsFilteredList, setAttractionsFilteredList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/attractions/${}');
        setAttractionsFilteredList(response.data.attractions.map(
          attractionCity => ({ label: attractionCity.city })
        ));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return {
    attractionsFilteredList,
    isLoading,
    error,
    filters,
    setFilters,
    submit,
    setSubmit
  };



};

export default FetchAttractionUsingFilters;