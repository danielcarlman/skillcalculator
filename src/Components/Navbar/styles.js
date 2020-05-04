import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  width: 100%;
  background: orchid;
  padding: 2rem 6rem;
`;

const NavbarItem = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export { Container, NavbarItem };
