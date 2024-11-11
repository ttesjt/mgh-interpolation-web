import React, { useState } from 'react';
import SmileFace from './SmileFace';
import DisplayBox from './DisplayBox';

const FaceInterpolation = () => {
  const [factor, setFactor] = useState(0);


  const onInterpolationFactorChange = (e) => {
    setFactor(parseFloat(e.target.value));
  }

  return (
    <DisplayBox factor={factor} onInterpolationFactorChange={onInterpolationFactorChange}>
      <h2>Are These Examples Helpful?</h2>
      <SmileFace factor={factor} />
    </DisplayBox>
  );
};

export default FaceInterpolation;