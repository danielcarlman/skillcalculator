import styled from 'styled-components';

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  width: 10rem;
  min-height: 3.7rem;
  background-color: ${(props) => (props.checked ? '#005C00' : '#9E0000')};
  color: white;
  border: 0.2rem solid white;

  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.2);
    filter: brightness(1.5);
  }
`;

Button.defaultProps = {
  'data-id': 'Button for Checking Skills',
};

export { Button };
