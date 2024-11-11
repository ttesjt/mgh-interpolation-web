import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import { interpolateColor, getLighter, getDarker } from '../utils/colorUtils';
import { ThemeConfig } from '../configs/ThemeConfig';

const BoxColorInterpolation = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [factor, setFactor] = useState(0);


  const onInterpolationFactorChange = (e) => {
    setFactor(parseFloat(e.target.value));
  }

  const interpolatedColor = interpolateColor(color1, color2, factor);

  return (
    <div style={{
      padding: `${ThemeConfig.displayAreaPadding}px`,
      paddingLeft: `${ThemeConfig.displayAreaPadding * 2}px`,
      paddingRight: `${ThemeConfig.displayAreaPadding * 2}px`,
      borderRadius: `${ThemeConfig.displayContentBorderRadius}px`,
      backgroundColor: ThemeConfig.backgroundColor,
      boxShadow: ThemeConfig.bigDropShadow,
    }}>
      <h2>Try Me!!</h2>
      {/* Display Rectangle */}
      <div
        style={{
          width: '400px',
          height: '200px',
          backgroundColor: interpolatedColor,
          borderRadius: `${ThemeConfig.displayContentBorderRadius}px`,
          marginBottom: '10px',
          boxShadow: ThemeConfig.midDropShadow,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <ColorPicker color={color1} onChange={setColor1} label="Color 1" />
        <ColorPicker color={color2} onChange={setColor2} label="Color 2" />
      </div>


      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={factor}
          // style={{
          //   background: interpolatedColor,
          // }}
          onChange={onInterpolationFactorChange}
        />
        <label>Interpolation Factor: {factor.toFixed(2)}</label>
      </div>
    </div>
  );
};

export default BoxColorInterpolation;