import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AttractionsContext } from '../../providers/AttractionsContext';
import cities from '../../mocks/cities';



const NavSearchLocation = () => {

  const { attractionsCitiesList, isLoadingAttractionCities, setCity, city } = useContext(AttractionsContext);

  const handleCityChange = (event, newValue) => {
    if (event.key === 'Enter') {
      setCity(newValue.label);
    }
  };


  return (

    <Autocomplete
      value={city}
      onChange={handleCityChange}
      disablePortal
      id="controllable-states-demo"
      options={isLoadingAttractionCities === true ? cities : attractionsCitiesList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="city" />}
    />

  );


};

export default NavSearchLocation;
