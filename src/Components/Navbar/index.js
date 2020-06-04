import React from 'react';
import * as C from './styles';
import logo from './assets/calculator.png';

export default function Navbar() {
  return (
    <C.Container>
      <C.StyledLink to='/'>
        <C.Logo>
          <C.LogoImage>
            <C.Image alt='' src={logo} />
          </C.LogoImage>
          <C.LogoText>
            React Skill
            <br /> Calculator
          </C.LogoText>
        </C.Logo>
      </C.StyledLink>
      <C.StyledLink to='/about' alt='About Button' tabIndex='0'>
        <C.LogoText>About</C.LogoText>
      </C.StyledLink>
    </C.Container>
  );
}
