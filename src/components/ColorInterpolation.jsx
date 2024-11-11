import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import { interpolateColor, getLighter, getDarker } from '../utils/colorUtils';
import { ThemeConfig } from '../configs/ThemeConfig';
import DisplayBox from './DisplayBox';

const ColorInterpolation = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [factor, setFactor] = useState(0);


  const onInterpolationFactorChange = (e) => {
    setFactor(parseFloat(e.target.value));
  }

  const interpolatedColor = interpolateColor(color1, color2, factor);

  return (
    <DisplayBox factor={factor} onInterpolationFactorChange={onInterpolationFactorChange}>
      <h2>Interpolates Between Colors</h2>
      <div
        style={{
          width: '100%',
          height: '180px',
          backgroundColor: interpolatedColor,
          borderRadius: `${ThemeConfig.displayContentBorderRadius}px`,
          marginBottom: '35px',
          boxShadow: ThemeConfig.midDropShadow,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <ColorPicker color={color1} onChange={setColor1} label="Color 1" />
        <ColorPicker color={color2} onChange={setColor2} label="Color 2" />
      </div>
    </DisplayBox>
  );
};

export default ColorInterpolation;