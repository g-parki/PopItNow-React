import React from 'react';
import './App.css';
import SourceCode from './components/SourceCodeLink';
import TimesManager from './components/TimesManager';
import Title from './components/Title'

function App() {
  return (
    <div>
      <Title />
      <TimesManager />
      <SourceCode />
    </div>
  );
}

export default App;
