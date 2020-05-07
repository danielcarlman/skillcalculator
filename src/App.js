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
    info:
      'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!',
    link: 'https://www.w3schools.com/html/',
  },
  {
    id: 'git',
    title: 'Git',
    color: '#093145',
    info: '',
    link: '',
  },
  {
    id: 'cssboxmodel',
    title: 'CSS Box Model',
    color: '#339933',
    info: '',
    link: '',
  },
  {
    id: 'cssflexbox',
    title: 'CSS Flexbox',
    color: '#394007',
    info: '',
    link: '',
  },
  {
    id: 'cssgrid',
    title: 'CSS Grid',
    color: '#464F30',
    info: '',
    link: '',
  },
  {
    id: 'csscustomproperties',
    title: 'CSS Variables',
    color: '#215E39',
    info: '',
    link: '',
  },
  {
    id: 'cssscss',
    title: 'CSS - SCSS',
    color: '#5C00B8',
    info: '',
    link: '',
  },
  {
    id: 'csssass',
    title: 'SASS',
    color: '#00005C',
    info: '',
    link: '',
  },
  {
    id: 'cssless',
    title: 'LESS',
    color: '#342E5C',
    info: '',
    link: '',
  },
  {
    id: 'cssmediaqueries',
    title: 'Media Queries',
    color: '#8B008B',
    info: '',
    link: '',
  },
  {
    id: 'cssstyledcomponents',
    title: 'Styled Components',
    color: '#910D27',
    info: '',
    link: '',
  },
  {
    id: 'javascriptclosures',
    title: 'Closures',
    color: '#8F3900',
    info: '',
    link: '',
  },
  {
    id: 'javascripthoisting',
    title: 'Hoisting',
    color: '#204A45',
    info: '',
    link: '',
  },
  {
    id: 'javascriptthiskeyword',
    title: '"this" keyword',
    color: '#ff6600',
    info: '',
    link: '',
  },
  {
    id: 'javascriptconstandlet',
    title: 'Const and Let',
    color: '#9A2617',
    info: '',
    link: '',
  },
  {
    id: 'javascriptarrowfunctions',
    title: 'Arrow Functions',
    color: '#cc33ff',
    info: '',
    link: '',
  },
  {
    id: 'javascriptternary',
    title: 'Ternary Operator',
    color: '#234B53',
    info: '',
    link: '',
  },
  {
    id: 'javascriptmapmethod',
    title: 'Map Method',
    color: '#0A4D34',
    info: '',
    link: '',
  },
  {
    id: 'javascriptfiltermethod',
    title: 'Filter Method',
    color: '#B40330',
    info: '',
    link: '',
  },
  {
    id: 'javascriptreducemethod',
    title: 'Reduce Method',
    color: '#004EC2',
    info: '',
    link: '',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
      count: 0,
      html: false,
      git: false,
      cssboxmodel: false,
      cssflexbox: false,
      cssgrid: false,
      csscustomproperties: false,
      cssscss: false,
      csssass: false,
      cssless: false,
      cssmediaqueries: false,
      cssbootstrap: false,
      cssstyledcomponents: false,
      javascriptclosures: false,
      javascripthoisting: false,
      javascriptconstandlet: false,
      javascriptarrowfunction: false,
      javascriptternary: false,
      javascriptmapmethod: false,
      javascriptfiltermethod: false,
      javascriptreducemethod: false,
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
    if (this.state.isClicked) {
      return skills.map((skill) => (
        <C.Box color={skill.color}>
          <C.BoxText>{skill.title}</C.BoxText>
          <Button
            onClick={this.toggleButton}
            checked={this.state[skill.id]}
            value={skill.id}
          />
        </C.Box>
      ));
    } else {
      return skills.map((skill) => (
        <C.Box color={skill.color}>
          <C.BoxText>{skill.title}</C.BoxText>
          <C.BoxText>{skill.info}</C.BoxText>
          <C.BoxText>{skill.link}</C.BoxText>
        </C.Box>
      ));
    }
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
        <C.BoxContainer>{this.renderSkills()}</C.BoxContainer>
      </C.Container>
    );
  }
}
