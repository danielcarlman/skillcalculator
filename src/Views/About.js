import React, { Component } from 'react';
import * as C from './styles';

export default class About extends Component {
  render() {
    return (
      <C.Container>
        <C.Box>
          <C.Title tabIndex='0'>React Skill Calculator</C.Title>
          <C.BoxSmallText tabIndex='0'>
            My name is Daniel Carlman and I'm a Front-End Developer.
          </C.BoxSmallText>
          <C.BoxSmallText tabIndex='0'>
            I created
            <em> React Skill Calculator</em> in May 2020 in order to help
            beginners determine what they need to learn before they try React.
            React has many prerequisites and pinpointing exactly what you need
            to know isn't exactly an easy task. I tried to break things down as
            much as possible and give the users some options. That's why there
            are so many options for styling, such as CSS, SASS, LESS and Styled
            Components.
          </C.BoxSmallText>
          <C.BoxSmallText tabIndex='0'>
            I had to learn React quickly for my first job, before I was really
            comfortable with many of the requirements. While I was able to do
            it, it's not an ideal situation. Not all skills listed in here are
            mandatory, but they are certainly very helpful.
          </C.BoxSmallText>
          <C.BoxSmallText tabIndex='0'>
            Here are the skills/technologies I used for this project:
            <C.TechList>
              <C.TechItem tabIndex='0'>HTML</C.TechItem>
              <C.TechItem tabIndex='0'>CSS</C.TechItem>
              <C.TechItem tabIndex='0'>CSS Box Model</C.TechItem>
              <C.TechItem tabIndex='0'>CSS Flexbox</C.TechItem>
              <C.TechItem tabIndex='0'>CSS Grid</C.TechItem>
              <C.TechItem tabIndex='0'>Media Queries</C.TechItem>
              <C.TechItem tabIndex='0'>Styled Components</C.TechItem>
              <C.TechItem tabIndex='0'>Ternary Operator</C.TechItem>
              <C.TechItem tabIndex='0'>Map Method</C.TechItem>
            </C.TechList>
          </C.BoxSmallText>
          <C.BoxSmallText tabIndex='0'>
            If you want to know more about this project, please email me at:
            daniel.v.carlman@gmail.com or&nbsp;
            <C.Link
              tabIndex='0'
              href='https://github.com/danielcarlman/skillcalculator'
              target='_blank'
            >
              check my Github page.
            </C.Link>
          </C.BoxSmallText>
        </C.Box>
      </C.Container>
    );
  }
}
