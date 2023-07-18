import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AttractionsContext } from '../../../providers/AttractionsContext';
import cities from '../../../mocks/cities';



const NavSearchLocation = () => {

  const { attractionsCitiesList, isLoadingAttractionCities, setCity, city } = useContext(AttractionsContext);
  const handleCityChange = (event, newValue) => {
    try {
      setCity(newValue.label);
    } catch (error) {
      setCity("Location");
    }
  };

  return (
    <Autocomplete
      value={city}
      onChange={handleCityChange}
      className="nav-form-input"
      options={isLoadingAttractionCities === true ? cities : attractionsCitiesList}
      isOptionEqualToValue={(option, value) => option.label === value}
      sx={{ width: 500 }}
      style={{ fontFamily: 'DM Sans' }}
      renderInput={(params) => <TextField {...params} size="large"
        sx={{ "& fieldset": { border: 'none' }, }}
      />}
    />
  );

};

export default NavSearchLocation;
