import React from 'react';
import Input from './features/Input/Input'
import './App.css';
import Robots from './features/Robots/Robots';
import Chuck from './features/ChuckNorris/ChuckNorris';
function App(props) {
  return (
    <div>
      <Chuck/>
      <Input />
      <Robots/>
    </div>
  );
}

export default App;
