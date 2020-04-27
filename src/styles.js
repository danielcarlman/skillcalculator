import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 150px);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  background-color: lightgray;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export { Container, Title, BoxContainer, Box };
