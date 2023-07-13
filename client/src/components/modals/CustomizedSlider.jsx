import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


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

const CustomizedSlider = (props) => {

  let min = 0;
  let max = 10000;

  if (props.name === 'Rating') {
    max = 5;
  }


  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);


  const handleSliderChange = (e, newValue) => {
    setMinValue(e[0]);
    setMaxValue(e[1]);

  };


  return (
    <Box sx={{ width: 320 }}>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        onChange={(_, newValue) => handleSliderChange(newValue)}
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