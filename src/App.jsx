import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormulaProvider } from './contexts/FormulaContext';
import FormulaTypeSelector from './components/FormulaTypeSelector';
import MainPageLayout from './components/MainPageLayout';

function App() {
  return (
    <FormulaProvider>
      <div>
        <MainPageLayout />
      </div>
    </FormulaProvider>
  )
}

export default App
