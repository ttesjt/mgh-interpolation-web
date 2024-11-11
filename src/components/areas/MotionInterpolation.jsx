import React, { useState } from 'react';
import DisplayBox from '../DisplayBox';

const MotionInterpolation = () => {
  const [factor, setFactor] = useState(0);
  const [interpolateValue, setInterpolateValue] = useState(0);


  const updateInterpolationFactor = (value) => {
    console.log(`Interpolation factor: ${value}`);
    setFactor(parseFloat(value));
  }

  const updateInterpolationValue = (value) => {
    console.log(`Interpolated value: ${value}`);
    setInterpolateValue(value);
  }

  return (
    <DisplayBox factor={factor} updateInterpolationFactor={updateInterpolationFactor} updateInterpolationValue={updateInterpolationValue}>
      <h2>Coming Soon</h2>
    </DisplayBox>
  );
};

export default MotionInterpolation;