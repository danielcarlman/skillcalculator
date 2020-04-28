import React, { Component } from 'react';
import './App.css';
import * as C from './styles';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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
  }

  toggleButton = (value) => {
    this.setState({ [value]: !this.state[value] });
    console.log(value);

    this.state[value]
      ? this.setState(({ count }) => ({
          count: count - 1,
        }))
      : this.setState(({ count }) => ({
          count: count + 1,
        }));
  };

  render() {
    const {
      html,
      cssboxmodel,
      cssflexbox,
      cssgrid,
      csssass,
      cssless,
      cssmediaqueries,
      cssbootstrap,
      javascriptarrowfunction,
    } = this.state;
    return (
      <C.Container>
        <Navbar />
        <C.Counter>{this.state.count} out of 9</C.Counter>
        <C.BoxContainer>
          <C.Box color='#093145'>
            <h1>HTML</h1>
            <Button onClick={this.toggleButton} checked={html} value={'html'} />
          </C.Box>
          <C.Box color='#9A2617'>
            <h1>CSS - BOX MODEL</h1>
            <Button
              onClick={this.toggleButton}
              checked={cssboxmodel}
              value={'cssboxmodel'}
            />
          </C.Box>
          <C.Box color='#829356'>
            <h1>CSS - FLEXBOX</h1>
            <Button
              onClick={this.toggleButton}
              checked={cssflexbox}
              value={'cssflexbox'}
            />
          </C.Box>
          <C.Box color='#3C6478'>
            <h1>CSS - GRID</h1>
            <Button
              onClick={this.toggleButton}
              checked={cssgrid}
              value={'cssgrid'}
            />
          </C.Box>
          <C.Box color='#CD594A'>
            <h1>CSS - SASS</h1>
            <Button
              onClick={this.toggleButton}
              checked={csssass}
              value={'csssass'}
            />
          </C.Box>
          <C.Box color='darkolivegreen'>
            <h1>CSS - LESS</h1>
            <Button
              onClick={this.toggleButton}
              checked={cssless}
              value={'cssless'}
            />
          </C.Box>
          <C.Box color='purple'>
            <h1>CSS - MEDIA QUERIES</h1>
            <Button
              onClick={this.toggleButton}
              checked={cssmediaqueries}
              value={'cssmediaqueries'}
            />
          </C.Box>
          <C.Box color='crimson'>
            <h1>CSS - BOOTSTRAP</h1>
            <Button
              onClick={this.toggleButton}
              checked={cssbootstrap}
              value={'cssbootstrap'}
            />
          </C.Box>
          <C.Box color='teal'>
            <h1>JS ES6 - ARROW FUNCTIONS</h1>
            <Button
              onClick={this.toggleButton}
              checked={javascriptarrowfunction}
              value={'javascriptarrowfunction'}
            />
          </C.Box>
        </C.BoxContainer>
      </C.Container>
    );
  }
}
