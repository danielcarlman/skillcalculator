import styled from 'styled-components';

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: ${(props) => (props.checked ? 'green' : 'red')};
  color: white;
  &:hover {
    opacity: 0.7;
  }
`;

export { Button };
