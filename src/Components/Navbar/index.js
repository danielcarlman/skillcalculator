import React from 'react';
import * as C from './styles';
import logo from './assets/calculator.png';

export default function Navbar() {
  return (
    <C.Container role='menu' aria-label='React Skill Calculator' tabIndex='0'>
      <C.StyledLink role='menuitem' to='/'>
        <C.Logo>
          <C.LogoImage>
            <C.Image src={logo} data-id='image' alt='Logo' />
          </C.LogoImage>
          <C.LogoText>
            React Skill
            <br /> Calculator
          </C.LogoText>
        </C.Logo>
      </C.StyledLink>
      <C.StyledLink role='menuitem' to='/about' alt='About Button' tabIndex='0'>
        <C.LogoText>About</C.LogoText>
      </C.StyledLink>
    </C.Container>
  );
}
