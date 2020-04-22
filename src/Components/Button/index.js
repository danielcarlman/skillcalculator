import React from 'react';
import * as C from './styles';

export default function Button(props) {
  return <C.Button checked={props.checked}>{props.name}</C.Button>;
}
