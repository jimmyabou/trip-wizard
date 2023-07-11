import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AttractionsContext } from '../../providers/AttractionsContext';



const NavSearchLocation = () => {

  const { attractionsCitiesData, isLoadingAttractionCities, attractionCitiesError } = useContext(AttractionsContext);


  const attractionsCitiesList = attractionsCitiesData.attractions.map(
    attractionCity => ({ label: attractionCity.city })

  );


  const anywhere = [
    { "label": "Paris" },
    { "label": "Ottawa" },
    { "label": "London" }];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={isLoadingAttractionCities === true ? anywhere : attractionsCitiesList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="city" />}
    />
  );


};

export default NavSearchLocation;
