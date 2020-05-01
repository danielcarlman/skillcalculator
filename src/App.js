import React, { Component } from 'react';
import './App.css';
import * as C from './styles';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

const skills = [
  {
    id: 'html',
    title: 'HTML',
    color: '#930700',
  },
  {
    id: 'git',
    title: 'Git (Version Control)',
    color: '#093145',
  },
  {
    id: 'cssboxmodel',
    title: 'CSS - Box Model',
    color: '#339933',
  },
  {
    id: 'cssflexbox',
    title: 'CSS - Flexbox',
    color: '#394007',
  },
  {
    id: 'cssgrid',
    title: 'CSS - Grid',
    color: '#464F30',
  },
  {
    id: 'csscustomproperties',
    title: 'CSS - Custom Properties',
    color: '#215E39',
  },
  {
    id: 'cssscss',
    title: 'CSS - SCSS',
    color: '#5C00B8',
  },
  {
    id: 'csssass',
    title: 'CSS - SASS',
    color: '#00005C',
  },
  {
    id: 'cssless',
    title: 'CSS - LESS',
    color: '#342E5C',
  },
  {
    id: 'cssmediaqueries',
    title: 'CSS - Media Queries',
    color: '#8B008B',
  },
  {
    id: 'cssstyledcomponents',
    title: 'JS/CSS - Styled Components',
    color: '#910D27',
  },
  {
    id: 'javascriptclosures',
    title: 'JS - Closures',
    color: '#8F3900',
  },
  {
    id: 'javascripthoisting',
    title: 'JS - Hoisting',
    color: '#204A45',
  },
  {
    id: 'javascriptthiskeyword',
    title: 'JS - "this" keyword',
    color: '#ff6600',
  },
  {
    id: 'javascriptconstandlet',
    title: 'JS ES6 - Const and Let (Scoping)',
    color: '#9A2617',
  },
  {
    id: 'javascriptarrowfunction',
    title: 'JS ES6 - Arrow Function',
    color: '#cc33ff',
  },
  {
    id: 'javascriptternary',
    title: 'JS ES6 - Ternary Operator',
    color: '#234B53',
  },
  {
    id: 'javascriptmapmethod',
    title: 'JS ES6 - Map Method',
    color: '#0A4D34',
  },
  {
    id: 'javascriptfiltermethod',
    title: 'JS ES6 - Filter Method',
    color: '#B40330',
  },
  {
    id: 'javascriptreducemethod',
    title: 'JS ES6 - Reduce Method',
    color: '#004EC2',
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
        <C.CounterContainer>
          <C.Counter>
            {this.state.count} out of {skills.length}
          </C.Counter>
        </C.CounterContainer>
        <C.BoxContainer box={skills.length}>
          {this.renderSkills()}
        </C.BoxContainer>
      </C.Container>
    );
  }
}
