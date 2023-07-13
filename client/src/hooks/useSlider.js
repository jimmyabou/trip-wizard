import React, { useState } from 'react';

const UseSlider = () => {

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);


  return {
    minValue,
    setMinValue,
    maxValue, 
    setMaxValue, 
  };
};

export default UseSlider;

