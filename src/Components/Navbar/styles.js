import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 100%;
  background: orchid;
  position: sticky;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

export { Container, Title };
