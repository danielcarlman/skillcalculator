import React, { Component } from 'react';
import './App.css';
import * as C from './styles';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

class App extends Component {
  state = {
    html: false,
    cssboxmodel: false,
    cssflexbox: false,
    cssgrid: false,
    csssass: false,
    cssless: false,
    cssmediaqueries: false,
    cssbootstrap: false,
    javascriptarrowfunction: false,
  };

  toggleButton = (value) => {
    this.setState({ [value]: !this.state[value] });
    console.log(value);
  };

  render() {
    return (
      <C.Container>
        <Navbar />
        <C.Title>Front-End Skill Calculator</C.Title>

        <C.BoxContainer>
          <C.Box color='darkseagreen'>
            <h1>HTML</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.html}
              value={'html'}
            />
          </C.Box>
          <C.Box color='blue'>
            <h1>CSS - BOX MODEL</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.cssboxmodel}
              value={'cssboxmodel'}
            />
          </C.Box>
          <C.Box color='greenyellow'>
            <h1>CSS FLEXBOX</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.cssflexbox}
              value={'cssflexbox'}
            />
          </C.Box>
          <C.Box color='orange'>
            <h1>CSS GRID</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.cssgrid}
              value={'cssgrid'}
            />
          </C.Box>
          <C.Box color='burlywood'>
            <h1>CSS SASS</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.csssass}
              value={'csssass'}
            />
          </C.Box>
          <C.Box color='darkolivegreen'>
            <h1>CSS LESS</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.cssless}
              value={'cssless'}
            />
          </C.Box>
          <C.Box color='purple'>
            <h1>CSS MEDIA QUERIES</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.cssmediaqueries}
              value={'cssmediaqueries'}
            />
          </C.Box>
          <C.Box color='crimson'>
            <h1>CSS BOOTSTRAP</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.cssbootstrap}
              value={'cssbootstrap'}
            />
          </C.Box>
          <C.Box color='cyan'>
            <h1>JAVASCRIPT ES6 - ARROW FUNCTIONS</h1>
            <Button
              toggleButton={this.toggleButton}
              checked={this.state.javascriptarrowfunction}
              value={'javascriptarrowfunction'}
            />
          </C.Box>
        </C.BoxContainer>
      </C.Container>
    );
  }
}

export default App;
