import React from 'react';
import * as C from './styles';

export default function Navbar() {
  return (
    <C.Container>
      <C.NavbarItem>React Skill Calculator</C.NavbarItem>
      <C.NavbarItem>About</C.NavbarItem>
    </C.Container>
  );
}
