import React, { Component } from 'react';
import * as C from './styles';

export default class About extends Component {
  render() {
    return (
      <C.Container>
        <C.Box>
          <C.BoxSmallText>
            My name is Daniel Carlman! I'm a Front-End Developer
          </C.BoxSmallText>
        </C.Box>
      </C.Container>
    );
  }
}
