import React, { useEffect, useRef, useContext, useState } from 'react';
import { FormulaContext } from '../../../contexts/FormulaContext';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const InterpolationCurveDisplay = () => {
  const canvasRef = useRef(null);
  const { selectedCurve, power } = useContext(FormulaContext);
  const [expression, setExpression] = useState('');

  useEffect(() => {
    setExpression(selectedCurve.format.replaceAll('_N_', power).replaceAll('_N-1_', power - 1));
    drawCurve(selectedCurve, power);
  }, [selectedCurve, power]);

  const canvasSize = 200.0;
  const drawCurve = (curve, powerValue) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, 256, 256);

    context.beginPath();
    context.moveTo(0, 0);

    for (let i = 1; i <= 256; ++i) {
      let progress = curve.evaluator(i / canvasSize, powerValue);
      context.lineTo(i, (1 - progress) * canvasSize);
    }

    context.stroke();
  };

  return (
    <div>
      <MathJaxContext>
        <div id="expression">
          <MathJax>{`\\(${expression}\\)`}</MathJax>
        </div>
      </MathJaxContext>

      <canvas ref={canvasRef} id="graph" width={canvasSize} height={canvasSize} style={{ border: '1px solid black' }}></canvas>
    </div>
  );
};

export default InterpolationCurveDisplay;