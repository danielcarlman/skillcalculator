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
      <C.Box color={skill.color}>
        <C.BoxText>{skill.title}</C.BoxText>

        {this.state.isClicked && [
          <C.InfoContainer>
            <C.InfoText>{skill.info}</C.InfoText>
            <C.InfoText>
              <a
                href={skill.video}
                target='_blank'
                rel='noopener noreferrer'
                key={i}
              >
                <C.InfoText>
                  Featured Video: <br /> "<em>{skill.videotitle}</em>" by{' '}
                  {skill.videoauthor}
                </C.InfoText>
              </a>
            </C.InfoText>
            <C.InfoText>
              <a
                href={skill.link}
                target='_blank'
                rel='noopener noreferrer'
                key={i}
              >
                Learn more
              </a>
              <C.InfoText>
                <a
                  href={skill.practice}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={i}
                >
                  {skill.practice ? 'Practice!' : ''}
                </a>
              </C.InfoText>
            </C.InfoText>
          </C.InfoContainer>,
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
    const { count, isClicked } = this.state;
    return (
      <C.Container>
        <Navbar />
        <C.CounterContainer isClicked={isClicked}>
          <C.Results isClicked={isClicked}>This is your result:</C.Results>
          <C.Counter>
            {count} out of {skills.length}
          </C.Counter>
        </C.CounterContainer>
        <C.BoxContainer isClicked={isClicked}>
          {this.renderSkills()}
        </C.BoxContainer>
      </C.Container>
    );
  }
}
