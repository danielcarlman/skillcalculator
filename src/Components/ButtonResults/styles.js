import styled from 'styled-components';

const ButtonResults = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  border: none;
  border-radius: 1rem;
  padding: 2rem 3rem;
  margin-bottom: 10rem;
  background-color: #3d3de3;
  color: white;
  width: 90%;

  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

ButtonResults.defaultProps = {
  'data-id': 'Button for Showing Results',
};

export { ButtonResults };
