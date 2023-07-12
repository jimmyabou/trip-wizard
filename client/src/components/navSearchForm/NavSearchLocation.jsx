import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AttractionsContext } from '../../providers/AttractionsContext';
import cities from '../../mocks/cities';



const NavSearchLocation = () => {

  const { attractionsCitiesList, isLoadingAttractionCities, setCity, city } = useContext(AttractionsContext);

  const handleCityChange = (event, newValue) => {
    try {
      setCity(newValue.label);

    } catch (error) {
      setCity(newValue);
    }
  };

  return (
    <Autocomplete
      value={city}
      onChange={handleCityChange}
      className="nav-form-input"
      options={isLoadingAttractionCities === true ? cities[0] : attractionsCitiesList}
      sx={{ width: 300}}
      renderInput={(params) => <TextField {...params} sx={{
        "& fieldset": { border: 'none' },
      }}
  />}
    />
  );

};

export default NavSearchLocation;
