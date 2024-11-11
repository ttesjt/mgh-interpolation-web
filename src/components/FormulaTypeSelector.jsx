import React, { useContext } from 'react';
import { FormulaContext } from '../contexts/FormulaContext';
import { ThemeConfig } from '../configs/ThemeConfig';

const FormulaTypeSelector = () => {
  const { selectedCurve, setSelectedCurve, power, setPower, curves } = useContext(FormulaContext);

  const handleCurveChange = (event) => {
    const curveKey = event.target.value;
    const curveObject = curves[curveKey];
    setSelectedCurve(curveObject);
    setPower(curveObject.defaultPower);
  };

  const handlePowerChange = (event) => {
    setPower(parseFloat(event.target.value));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '450px',
      padding: `${ThemeConfig.displayAreaPadding}px`,
      paddingLeft: `${ThemeConfig.displayAreaPadding * 2}px`,
      paddingRight: `${ThemeConfig.displayAreaPadding * 2}px`,
      borderRadius: `${ThemeConfig.displayContentBorderRadius}px`,
      backgroundColor: ThemeConfig.backgroundColor,
      boxShadow: ThemeConfig.bigDropShadow,
    }}>
      <label>
        Curve Type:
        <select value={selectedCurve.name} onChange={handleCurveChange}>
          {Object.keys(curves).map((key) => (
            <option key={key} value={key}>
              {curves[key].name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Exponent:
        <input
          type="number"
          value={power}
          onChange={handlePowerChange}
        />
      </label>
    </div>
  );
};

export default FormulaTypeSelector;