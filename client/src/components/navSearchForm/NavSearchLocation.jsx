import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';






const NavSearchLocation = () => {

  const anywhere = [
    {
      "country": "France",
      "label": "Paris",
      "latitude": 48.86401059999999, "longitude": 2.3059374,
      "category": "Dining/Cruise",
      "rating": "4.3",
      "price": 195,
      "duration": 120,
    },
    {
      "country": "Canada",
      "label": "Ottawa",
      "latitude": 48.86401059999999, "longitude": 2.3059374,
      "category": "Dining/Cruise",
      "rating": "4.3",
      "price": 195,
      "duration": 120,
    },
    {
      "country": "United Kingdom",
      "label": "London",
      "latitude": 48.86401059999999, "longitude": 2.3059374,
      "category": "Dining/Cruise",
      "rating": "4.3",
      "price": 195,
      "duration": 120,
    }];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={anywhere}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="city" />}
    />
  );


};

export default NavSearchLocation;
