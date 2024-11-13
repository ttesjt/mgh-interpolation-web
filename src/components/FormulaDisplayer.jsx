import React, { useEffect, useRef, useContext, useState } from 'react';
import { FormulaContext } from '../contexts/FormulaContext';
import { ThemeConfig } from '../configs/ThemeConfig';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const FormulaDisplayer = () => {
  const [expression, setExpression] = useState('');
  const { selectedCurve, setSelectedCurve, power, setPower, curves } = useContext(FormulaContext);

  useEffect(() => {
    setExpression(selectedCurve.format.replaceAll('_N_', power).replaceAll('_N-1_', power - 1));
  }, [selectedCurve, power]);


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100px',
      width: '400px',
      padding: `${ThemeConfig.displayAreaPadding}px`,
      paddingLeft: `${ThemeConfig.displayAreaPadding * 2}px`,
      paddingRight: `${ThemeConfig.displayAreaPadding * 2}px`,
      borderRadius: `${ThemeConfig.displayContentBorderRadius}px`,
      backgroundColor: ThemeConfig.backgroundColor,
      boxShadow: ThemeConfig.bigDropShadow,
    }}>
      <MathJaxContext>
        <div id="expression" style={{ fontSize: '30px' }}>
          <MathJax inline dynamic>
            {`\\(${expression}\\)`}
          </MathJax>
        </div>
      </MathJaxContext>
    </div>
  );
};

export default FormulaDisplayer;