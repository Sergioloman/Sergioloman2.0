import {useState} from 'react';
import './App.css';
import Navigation  from './components/Navigation';
import About from './Pages/About/About.js';
import Portfolio from './Pages/Portfolio/Portfolio';

// we need to render each one of these conditionally on click
function App() {
  return (
    <div>
      <Navigation></Navigation>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
///////////////