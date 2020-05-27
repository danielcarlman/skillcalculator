import React from 'react';
import * as C from './styles';
import logo from './assets/calculator.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <C.Container>
      <C.StyledLink to='/'>
        <C.Logo>
          <C.NavImage>
            <img alt='logo' src={logo} />
          </C.NavImage>
          <C.NavbarItem>
            React Skill
            <br /> Calculator
          </C.NavbarItem>
        </C.Logo>
      </C.StyledLink>
      <C.StyledLink to='/about'>
        <C.NavbarItem>About</C.NavbarItem>
      </C.StyledLink>
    </C.Container>
  );
}
