import React, { useEffect, useRef, useState } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';


const curves = {
  linear: { name: "Linear", evaluator: function (t, n) { return t; }, format: "t", defaultPower: 1 },
  power: { name: "Power", evaluator: function (t, n) { return t ** n; }, format: "t^{_N_}", defaultPower: 2 },
  minus_power: { name: "Reverse Power", evaluator: function (t, n) { return 1 - (1 - t) ** n; }, format: "1 - (1-t)^{_N_}", defaultPower: 2 },
  binom_ease: { name: "Binomial Ease", evaluator: function (t, n) { return n * t ** (n - 1) - (n - 1) * t ** n; }, format: "_N_t^{_N-1_} - _N-1_t^{_N_}", defaultPower: 3 },
  sine: { name: "Sine Wave", evaluator: function (t, n) { return (0.5 - 0.5 * Math.cos(Math.PI * t)); }, format: "\\frac{1 - \\cos(\\pi t)}{2}", defaultPower: 1 }
};

const InterpolationCurveDisplay = () => {
  const canvasRef = useRef(null);
  const [selectedCurve, setSelectedCurve] = useState('linear');
  const [power, setPower] = useState(curves.linear.defaultPower);
  const [expression, setExpression] = useState(curves.linear.format.replaceAll('_N_', power));

  useEffect(() => {
    const curve = curves[selectedCurve];
    setPower(curve.defaultPower);
    setExpression(curve.format.replaceAll('_N_', curve.defaultPower).replaceAll('_N-1_', curve.defaultPower - 1));
    drawCurve(curve, curve.defaultPower);
  }, [selectedCurve]);

  useEffect(() => {
    const curve = curves[selectedCurve];
    setExpression(curve.format.replaceAll('_N_', power).replaceAll('_N-1_', power - 1));
    drawCurve(curve, power);
  }, [power]);

  const drawCurve = (curve, powerValue) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, 256, 256);

    context.beginPath();
    context.moveTo(0, 0);

    for (let i = 1; i <= 256; ++i) {
      let progress = curve.evaluator(i / 256.0, powerValue);
      context.lineTo(i, (1 - progress) * 256.0);
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

      <canvas ref={canvasRef} id="graph" width="256" height="256" style={{ border: '1px solid black' }}></canvas>
    </div>
  );
};

export default InterpolationCurveDisplay;