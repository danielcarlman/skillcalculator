import React from 'react';
import * as C from './styles';

export default function Button(props) {
  return (
    <C.Button
      onClick={() => props.toggleButton(props.value)}
      checked={props.checked}
    >
      {props.checked ? 'OK ✔' : 'Check'}
    </C.Button>
  );
}
