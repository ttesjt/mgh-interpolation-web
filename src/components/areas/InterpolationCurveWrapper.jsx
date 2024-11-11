import React, { useState } from 'react';
import DisplayBox from '../DisplayBox';
import InterpolationCurveDisplay from './pieces/InterpolationCurveDisplay';

const InterpolationCurveWrapper = () => {
  const [factor, setFactor] = useState(0);


  const onInterpolationFactorChange = (e) => {
    setFactor(parseFloat(e.target.value));
  }

  return (
    <DisplayBox factor={factor} onInterpolationFactorChange={onInterpolationFactorChange}>
      <h2>Interpolates Curves</h2>
      <InterpolationCurveDisplay />
    </DisplayBox>
  );
};

export default InterpolationCurveWrapper;