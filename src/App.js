import React, { Component } from 'react';
import './App.css';
import * as C from './styles';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

let skills = [
  {
    id: 'html',
    title: 'HTML',
    color: '#093145',
  },
  {
    id: 'cssboxmodel',
    title: 'CSS - Box Model',
    color: '#9A2617',
  },
  {
    id: 'cssflexbox',
    title: 'CSS - Flexbox',
    color: '#829356',
  },
];

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

    const createBox = () => {
      skills.map((skill) => {
        return (
          <C.Box color={skill.color}>
            <h1>{skill.title}</h1>
            <Button
              onClick={this.toggleButton}
              checked={skill.id}
              value={skill.id}
            />
          </C.Box>
        );
      });
    };

    return (
      <C.Container>
        <Navbar />
        <C.Counter>{this.state.count} out of 9</C.Counter>
        <C.BoxContainer>{createBox()}</C.BoxContainer>
      </C.Container>
    );
  }
}
