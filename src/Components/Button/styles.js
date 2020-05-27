import styled from 'styled-components';

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  width: 10rem;
  min-height: 3.7rem;
  background-color: ${(props) => (props.checked ? 'green' : 'red')};
  color: white;

  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`;

export { Button };
