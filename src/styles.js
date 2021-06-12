import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
`;
const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  position: ${(props) => (props.isClicked ? 'static' : 'sticky')};
  background: rgb(0, 0, 0, 0.75);
  margin-top: 2rem;
  z-index: 10;
`;

const Counter = styled.h1`
  color: 'ffffff';
  font-size: ${(props) => (props.isClicked ? '3rem' : '5rem')};
  font-weight: 700;
  opacity: 1;
  margin: 0;
  padding: 1rem 10rem;
`;

const InstructionContainer = styled.div`
  width: 80%;

  @media screen and (max-width: 60rem) {
  }
`;

const InstructionText = styled.h2`
  color: 'ffffff';
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  opacity: 1;
  margin: 0;

  @media screen and (max-width: 60rem) {
    font-size: 2rem;
  }
`;

const Results = styled.h1`
  display: ${(props) => (props.isClicked ? 'block' : 'none')};
  margin: 1rem;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  opacity: 1;
`;

const BoxContainer = styled.main`
  display: grid;
  grid-auto-rows: ${(props) =>
    props.isClicked ? '1fr' : 'minmax(300px, 1fr)'};
  grid-template-columns: ${(props) =>
    props.isClicked ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))'};
  grid-gap: 8rem;
  width: 90%;
  @media screen and (max-width: 60rem) {
    width: 100%;
  }
  padding: 5rem;
`;

const BoxTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Box = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 60rem) {
    justify-content: center;
  }

  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 2rem;
  text-align: center;
  padding: 5rem 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InfoText = styled.h2`
  font-size: 2.5rem;
  margin: 2rem 2rem;

  @media screen and (max-width: 60rem) {
    font-size: 1.5rem;
  }
`;

const Link = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: underline;
`;

Container.defaultProps = {
  'data-id': 'View Container',
};

CounterContainer.defaultProps = {
  'data-id': 'Counter Container',
};

Counter.defaultProps = {
  'data-id': 'Counter Text',
};

InstructionContainer.defaultProps = {
  'data-id': 'Instruction Container',
};

InstructionText.defaultProps = {
  'data-id': 'Instruction Text',
};

Results.defaultProps = {
  'data-id': 'Results Text',
};

BoxContainer.defaultProps = {
  'data-id': 'Box Grid Container',
};

BoxTitle.defaultProps = {
  'data-id': 'Skill Box Title',
};

Box.defaultProps = {
  'data-id': 'Skill Box',
};

InfoContainer.defaultProps = {
  'data-id': 'Skill Info Container',
};

InfoText.defaultProps = {
  'data-id': 'Skill Info Text',
};

Link.defaultProps = {
  'data-id': 'External Link',
};

export {
  Container,
  CounterContainer,
  Counter,
  InstructionContainer,
  InstructionText,
  Results,
  BoxContainer,
  BoxTitle,
  Box,
  InfoContainer,
  InfoText,
  Link,
};
