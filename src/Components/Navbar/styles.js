import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  width: 100%;
  background: #215e39;
  padding: 2rem 6rem;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavbarItem = styled.h1`
  font-family: 'Press Start 2P', cursive;
  color: white;
  font-size: 2rem;
  margin: 0.5rem 0.5rem;
  line-height: 3rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

const NavImage = styled.div`
  img {
    width: 5rem;
    margin-right: 3rem;

    @media screen and (max-width: 600px) {
      width: 4rem;
      margin-right: 1rem;
    }
  }
`;

export { Container, Logo, NavbarItem, NavImage };
