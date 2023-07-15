import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { AttractionsContext } from '../../providers/AttractionsContext';
import ModalContext from '../../providers/ModalContext';
import UseSlider from '../../hooks/useSlider';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#51D4BF',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

const CustomizedSlider = () => {

  const { filterName } = useContext(ModalContext);
  const { filters, setFilters } = useContext(AttractionsContext);
  const { minValue, setMinValue, maxValue, setMaxValue } = UseSlider();


  let min = 0;
  let max = 500;

  if (filterName === 'Rating') {
    max = 5;
  }

  const handleSliderChange = (e, newValue) => {
    setMinValue(e[0]);
    setMaxValue(e[1]);


    if (filterName === 'Rating') {
      // remove previous rating filter (if exists)
      setFilters(prevState => prevState.filter(
        (item) => {
          if (typeof item === 'object' && 'Rating' in item) {
            return false; // Exclude objects with the specified key
          }
          return true; // Include strings and other objects
        }
      ));

      //add new rating
      setFilters(prevState => [...prevState, { 'Rating': e }]);
    } else {
      // remove previous rating filter (if exists)
      setFilters(prevState => prevState.filter(
        (item) => {
          if (typeof item === 'object' && 'Budget' in item) {
            return false; // Exclude objects with the specified key
          }
          return true; // Include strings and other objects
        }
      ));
      //add new Budget
      setFilters(prevState => [...prevState, { 'Budget': e }]);
    }
  };


  return (
    <Box sx={{ width: 320 }}>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        onChangeCommitted={(_, newValue) => handleSliderChange(newValue)}
        valueLabelDisplay={'auto'}
        value={[minValue, maxValue]}
        min={min}
        max={max}
      />
    </Box>
  );
};

export default CustomizedSlider;