import React, { useState } from 'react';
import SmileFace from './pieces/SmileFace';
import DisplayBox from '../DisplayBox';

const FaceInterpolation = () => {
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
      <h2>Are These Examples Helpful?</h2>
      <SmileFace interpolateValue={interpolateValue} />
    </DisplayBox>
  );
};

export default FaceInterpolation;