import React, { Component } from 'react';
import './App.css';
import * as C from './styles';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

class App extends Component {
  state = {
    isChecked: false,
    html: false,
    css: false,
  };

  trocarBotao = (value) => {
    this.setState({ [value]: !this.state[value] });
    console.log(value);
  };

  render() {
    return (
      <C.Container>
        <Navbar />
        <C.Title>Front-End Skill Calculator</C.Title>
        <Button
          toggleButton={this.trocarBotao}
          checked={this.state.html}
          value={'html'}
        />
        <Button
          toggleButton={this.trocarBotao}
          checked={this.state.css}
          value={'css'}
        />
      </C.Container>
    );
  }
}

export default App;
