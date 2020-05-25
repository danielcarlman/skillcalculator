import React from 'react';
import * as C from './styles';
import logo from './assets/calculator.jpg';

export default function Navbar() {
  return (
    <C.Container>
      <C.Logo>
        <C.NavImage>
          <img alt='logo' src={logo} />
        </C.NavImage>
        <C.NavbarItem>
          React Skill
          <br /> Calculator
        </C.NavbarItem>
      </C.Logo>
      <C.NavbarItem>About</C.NavbarItem>
    </C.Container>
  );
}
