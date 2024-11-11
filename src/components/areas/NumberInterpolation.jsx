import React, { useState } from 'react';
import { interpolateColor, getLighter, getDarker } from '../../utils/colorUtils';
import { ThemeConfig } from '../../configs/ThemeConfig';
import DisplayBox from '../DisplayBox';
import { VerticalFillbar } from './pieces/VerticalFillbar';

const NumberInterpolation = () => {
  const [factor, setFactor] = useState(0);
  const [multiplier, setMultiplier] = useState(0);

  const onInterpolationFactorChange = (e) => {
    setFactor(parseFloat(e.target.value));
    // for now, the multiplier is the same as the factor
    setMultiplier(parseFloat(e.target.value));
  };

  const backgroundColor = getLighter(ThemeConfig.backgroundColor, 0.2);

  const mediaSectionHeight = 220;
  const mediaSectionTextHeight = 15;
  return (
    <DisplayBox factor={factor} onInterpolationFactorChange={onInterpolationFactorChange}>
      <h2>Value on the Curve</h2>
      <div
        style={{
          width: '100%',
          height: '180px',
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
          marginBottom: '35px',
        }}
      >
        <div style={{
          width: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <label style={{ marginBottom: 5 }}>{factor.toFixed(2)}</label>
          <VerticalFillbar backgroundColor={backgroundColor} fillColor='#00ff00' heightInNumber={mediaSectionHeight - mediaSectionTextHeight * 2} width={30} capValue={1} fillValue={factor} />
          <label style={{ marginTop: 5 }}>Interpolation Factor</label>
        </div>
        <div style={{
          width: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <label style={{ marginBottom: 5 }}>{multiplier.toFixed(2)}</label>
          <VerticalFillbar backgroundColor={backgroundColor} fillColor='#0000ff' heightInNumber={mediaSectionHeight - mediaSectionTextHeight * 2} width={30} capValue={1} fillValue={multiplier} />
          <label style={{ marginTop: 5 }}>Value On Curve</label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', }}>
        {/*        <label>Interpolation Factor: {factor.toFixed(2)}</label>
        <input
          type="number"
          value={inputValue}
          onChange={onInputChange}
          style={{ width: '120px', marginLeft: '15px', }}
          placeholder="Enter a value"
        />*/}
      </div>
    </DisplayBox>
  );
};

export default NumberInterpolation;