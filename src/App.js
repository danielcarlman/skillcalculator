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
      isClicked: false,
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

  showResults = () => {
    this.setState({ isClicked: true });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  renderMessage = (arg) => {
    switch (true) {
      case arg < 20:
        return 'Still a lot to learn!';
      case arg < 40:
        return "You're doing well! Keep going!";
      case arg < 60:
        return "You're doing great!";
      case arg < 80:
        return "You're pretty much ready for React!";
      case arg < 90:
        return "You're almost there!";
      case arg <= 100:
        return 'You should be working as a React Developer already!';
      default:
        return 'Error';
    }
  };

  renderSkills = () => {
    return skills.map((skill, i) => (
      <C.Box
        color={skill.color}
        hidden={this.state.isClicked && this.state[skill.id]}
      >
        <C.BoxText>{skill.title}</C.BoxText>

        {this.state.isClicked && [
          <C.InfoContainer>
            <C.InfoText>{skill.info}</C.InfoText>
            <C.InfoLink>
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
            </C.InfoLink>
            <C.InfoLink>
              <C.InfoText>
                <a
                  href={skill.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={i}
                >
                  Learn more
                </a>
              </C.InfoText>
            </C.InfoLink>
            <C.InfoLink>
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
            </C.InfoLink>
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
    const result = (count / skills.length) * 100;
    return (
      <C.Container>
        <Navbar />
        <C.CounterContainer isClicked={isClicked}>
          <C.Results isClicked={isClicked}>This is your result:</C.Results>
          {isClicked ? (
            [
              <C.Counter>{result}%</C.Counter>,
              <C.Results isClicked={isClicked}>
                {this.renderMessage(result)}
              </C.Results>,
            ]
          ) : (
            <C.Counter>
              {count} out of {skills.length}
            </C.Counter>
          )}
        </C.CounterContainer>
        <C.BoxContainer isClicked={isClicked}>
          {this.renderSkills()}
        </C.BoxContainer>

        {!this.state.isClicked && <Button onClick={this.showResults} />}
      </C.Container>
    );
  }
}
