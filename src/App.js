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
    color: 'seagreen',
  },
  {
    id: 'cssgrid',
    title: 'CSS - Grid',
    color: '#829356',
  },
  {
    id: 'csssass',
    title: 'CSS - SASS',
    color: 'navy',
  },
  {
    id: 'cssless',
    title: 'CSS - LESS',
    color: 'darkslateblue',
  },
  {
    id: 'cssmediaqueries',
    title: 'CSS - Media Queries',
    color: 'darkmagenta',
  },
  {
    id: 'cssbootstrap',
    title: 'CSS - Bootstrap',
    color: 'crimson',
  },
  {
    id: 'javascriptarrowfunction',
    title: 'JS - Arrow Function',
    color: '#107896',
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

  renderSkills = () => {
    return skills.map((skill) => (
      <C.Box color={skill.color}>
        <h1>{skill.title}</h1>
        <Button
          onClick={this.toggleButton}
          checked={this.state[skill.id]}
          value={skill.id}
        />
      </C.Box>
    ));
  };

  render() {
    return (
      <C.Container>
        <Navbar />
        <C.Counter>{this.state.count} out of 9</C.Counter>
        <C.BoxContainer>{this.renderSkills()}</C.BoxContainer>
      </C.Container>
    );
  }
}
