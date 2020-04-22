import React from 'react';
import * as C from './styles';

export default function Navbar() {
  return (
    <C.Container>
      <img
        src={require('../Navbar/assets/logo_.png')}
        alt='Front-End Skill Calculator'
      />
    </C.Container>
  );
}
