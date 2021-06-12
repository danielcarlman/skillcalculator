import styled from 'styled-components';

const Button = styled.button`
  font-family: 'sans-serif';
  font-size: 3rem;
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  width: 20rem;
  min-height: 3.7rem;
  background-color: ${(props) => (props.checked ? '#ffffff' : 'transparent')};
  color: ${(props) => (props.checked ? props.color : '#ffffff')};
  border: 0.4rem solid white;

  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

Button.defaultProps = {
  'data-id': 'Button for Checking Skills',
};

export { Button };
