import React, { useEffect, useContext } from 'react';
import { ThemeConfig } from '../configs/ThemeConfig';
import { FormulaContext } from '../contexts/FormulaContext';

const DisplayBox = ({ children, updateInterpolationFactor, updateInterpolationValue, factor }) => {
  const { selectedCurve, power } = useContext(FormulaContext);

  const onSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    updateInterpolationFactor(value);
    updateInterpolationValue(selectedCurve.evaluator(value, power));
  }

  useEffect(() => {
    // when changed the curve, then just use the current factor, which is time, to update the value
    updateInterpolationValue(selectedCurve.evaluator(factor, power));
  }, [selectedCurve, power]);
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        padding: `${ThemeConfig.displayAreaPadding}px`,
        paddingLeft: `${ThemeConfig.displayAreaPadding * 2}px`,
        paddingRight: `${ThemeConfig.displayAreaPadding * 2}px`,
        borderRadius: `${ThemeConfig.displayContentBorderRadius}px`,
        backgroundColor: ThemeConfig.backgroundColor,
        boxShadow: ThemeConfig.bigDropShadow,
      }}
    >
      <div style={{ width: '100%', height: '350px' }}>
        {children}
      </div>

      <div
        style={{
          width: '100%',
          height: '50px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={factor}
            onChange={onSliderChange}
          />
          <label>Interpolation Factor: {factor.toFixed(2)}</label>
        </div>
      </div>
    </div>
  );
};
export default DisplayBox;