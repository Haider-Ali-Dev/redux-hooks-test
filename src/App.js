import React from 'react';
import './App.css';
import Robots from './features/Robots/Robots';
import ChuckNorris from './features/ChuckNorris/ChuckNorris';
import Urban from './features/UrbanDict/Urban';
function App(props) {
  return (
    <div>
      <h1 className="center">Wonders of Web</h1>
      <div className="grid">
      <ChuckNorris className="grid-item"/>
      <Robots className="grid-item"/>
      <Urban className="grid-item"/>
      </div>
    </div>
  );
}

export default App;
