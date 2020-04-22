import React from 'react';
import './App.css';
import * as C from './styles';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

function App() {
  return (
    <C.Container>
      <Navbar />
      <C.Title>Front-End Skill Calculator</C.Title>
      <Button checked name='OK ✔' />
      <Button name='Check' />
    </C.Container>
  );
}

export default App;
