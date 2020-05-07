import React, { Component } from 'react';
import './App.css';
import * as C from './styles';
import skills from './skills';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

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

    this.state[value]
      ? this.setState(({ count }) => ({
          count: count - 1,
        }))
      : this.setState(({ count }) => ({
          count: count + 1,
        }));
  };

  renderSkills = () => {
    return skills.map((skill, i) => (
      <C.Box isClicked={this.state.isClicked} color={skill.color}>
        <C.BoxText>{skill.title}</C.BoxText>

        {this.state.isClicked && [
          <C.InfoText>
            <a
              href={skill.link}
              target='_blank'
              rel='noopener noreferrer'
              key={i}
            >
              <C.InfoText>{skill.info}</C.InfoText>
              Learn more
            </a>
          </C.InfoText>,
        ]}

        {!this.state.isClicked && (
          <Button
            onClick={this.toggleButton}
            checked={this.state[skill.id]}
            value={skill.id}
          />
        )}
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
        <C.BoxContainer>{this.renderSkills()}</C.BoxContainer>
      </C.Container>
    );
  }
}
