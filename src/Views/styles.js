import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: white;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #093145;
  border-radius: 30px;
  text-align: left;
  margin: 5rem;
  padding: 1rem 5rem;
  width: 80%;
`;

const Title = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: 4rem;
  line-height: 6rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const BoxSmallText = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  line-height: 5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 3rem;
  }
`;

const TechList = styled.ul`
  list-style-type: decimal;
`;

const TechItem = styled.li``;

const Link = styled.a`
  color: white;
`;

Container.defaultProps = {
  'data-id': 'View Container',
};

Title.defaultProps = {
  'data-id': 'Box Title',
};

Box.defaultProps = {
  'data-id': 'Box Container ',
};

BoxSmallText.defaultProps = {
  'data-id': 'Small Text Box',
};

TechList.defaultProps = {
  'data-id': 'Tech List',
};

TechItem.defaultProps = {
  'data-id': 'Tech Item',
};

Link.defaultProps = {
  'data-id': 'External Link',
};

export { Container, Title, Box, BoxSmallText, TechList, TechItem, Link };
