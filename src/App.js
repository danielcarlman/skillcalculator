import React, { Component } from 'react';
import './App.css';
import * as C from './styles';
import skills from './skills';
import Button from './Components/Button';
import ButtonResults from './Components/ButtonResults';

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
        <C.BoxTitle tabIndex='0'>{skill.title}</C.BoxTitle>

        {this.state.isClicked && [
          <C.InfoContainer>
            <C.InfoText tabIndex='0'>{skill.info}</C.InfoText>

            <C.Link href={skill.video} target='_blank'>
              <C.InfoText>
                Featured Video: <br /> "<em>{skill.videotitle}</em>" by{' '}
                {skill.videoauthor}
              </C.InfoText>
            </C.Link>

            <C.Link href={skill.link} target='_blank'>
              <C.InfoText>Learn more</C.InfoText>
            </C.Link>

            <C.Link href={skill.practice} target='_blank'>
              <C.InfoText>{skill.practice ? 'Practice!' : ''}</C.InfoText>
            </C.Link>
          </C.InfoContainer>,
        ]}

        {!this.state.isClicked && (
          <Button
            onClick={this.toggleButton}
            checked={this.state[skill.id]}
            value={skill.id}
            ariaLabel={`Check if you know ${skill.title}`}
            ariaLabelChecked={`Checked. You checked ${this.state.count} out of ${skills.length} `}
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
        <C.CounterContainer isClicked={isClicked}>
          <C.Results isClicked={isClicked} tabIndex='0'>
            This is your result:
          </C.Results>
          {isClicked ? (
            [
              <C.Counter tabIndex='0'>{result}%</C.Counter>,
              <C.Results isClicked={isClicked} tabIndex='0'>
                {this.renderMessage(result)}
              </C.Results>,
            ]
          ) : (
            <C.Counter tabIndex='0'>
              {count} out of {skills.length}
            </C.Counter>
          )}
        </C.CounterContainer>

        {!this.state.isClicked && (
          <C.InstructionContainer>
            <C.InstructionText tabIndex='0'>
              Check the skills you already have and see if you're ready for
              React!
            </C.InstructionText>
          </C.InstructionContainer>
        )}
        <C.BoxContainer isClicked={isClicked}>
          {this.renderSkills()}
        </C.BoxContainer>

        {!this.state.isClicked && (
          <ButtonResults onClick={this.showResults} text='Get Results' />
        )}
      </C.Container>
    );
  }
}
