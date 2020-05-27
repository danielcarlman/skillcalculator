import React from 'react';
import * as C from './styles';

export default function Button(props) {
  return (
    <C.ButtonResults onClick={() => props.onClick(props.value)}>
      {props.text}
    </C.ButtonResults>
  );
}
