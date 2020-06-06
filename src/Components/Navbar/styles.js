import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  width: 100%;
  background: #215e39;
  padding: 2rem 3rem;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoText = styled.h1`
  font-family: 'Press Start 2P', cursive;
  color: white;
  font-size: 2rem;
  margin: 0.5rem 0.5rem;
  line-height: 3rem;
  text-decoration: none;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const LogoImage = styled.div`
  img {
    width: 5rem;
    margin-right: 3rem;

    @media screen and (max-width: 600px) {
      width: 4rem;
      margin-right: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Image = styled.img``;

Container.defaultProps = {
  'data-id': 'View Container',
};

Logo.defaultProps = {
  'data-id': 'Logo Container',
};

LogoText.defaultProps = {
  'data-id': 'Logo Text',
};

LogoImage.defaultProps = {
  'data-id': 'Logo Image Container',
};

StyledLink.defaultProps = {
  'data-id': 'Styled Link',
};

Image.defaultProps = {
  'data-id': 'Image',
};

export { Container, Logo, LogoText, LogoImage, StyledLink, Image };
