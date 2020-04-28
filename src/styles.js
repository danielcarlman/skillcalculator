import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  min-width: 350px;
`;

const Counter = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 700;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 150px);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  height: 100vh;
  padding: 20px 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 30px;
`;

export { Container, Counter, BoxContainer, Box };
