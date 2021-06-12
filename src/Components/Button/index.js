import React from 'react';
import * as C from './styles';

export default function Button(props) {
  return (
    <C.Button
      onClick={() => props.onClick(props.value)}
      checked={props.checked}
      aria-label={props.checked ? props.ariaLabelChecked : props.ariaLabel}
      color={props.checked ? props.color : 'white'}
    >
      {props.checked ? '✔' : 'CHECK'}
    </C.Button>
  );
}
