import React from 'react';
import Template from './components/design/template';
import Background from './components/design/background';
import TimelineMarker from './components/timelineMarker';
// import Baby from './components/design/baby';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Background />
      <p className="user">Nicolas Hedoire</p>
      <div className="timeline">
        <h1>Naissance: 09/09/1986</h1>
        <TimelineMarker />
        <h1>Conception</h1>
        <Template />
        <h1>Next</h1>
        <TimelineMarker />
        <h1>Next</h1>
      </div>
    </div>
  );
}

export default App;
