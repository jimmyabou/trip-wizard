import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAttractionUsingFilters = () => {

  // filters \\
  const [filters, setFilters] = useState([]);

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
    error
  };



};

export default FetchAttractionUsingFilters;