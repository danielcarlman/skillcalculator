import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  min-width: 350px;
`;
const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100px;
  position: sticky;
  background: rgb(0, 0, 0, 0.75);
`;

const Counter = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 700;
  opacity: 1;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 150px);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  height: 100%;
  padding: 30px 30px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 30px;
`;

export { Container, CounterContainer, Counter, BoxContainer, Box };
