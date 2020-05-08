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
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100px;
  position: sticky;
  background: rgb(0, 0, 0, 0.75);
`;

const Counter = styled.h1`
  color: orchid;
  font-size: 5rem;
  font-weight: 700;
  opacity: 1;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-auto-rows: ${(props) =>
    props.isClicked ? '1fr' : 'minmax(250px, 1fr)'};
  grid-template-columns: ${(props) =>
    props.isClicked ? '1fr' : 'repeat(auto-fill, minmax(22rem, 1fr))'};
  grid-gap: 30px;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
`;

const BoxText = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isClicked ? 'center' : 'space-between')};

  @media screen and (max-width: 600px) {
    justify-content: center;
  }

  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 30px;
  text-align: center;
  padding: 5rem 1rem;
`;

const InfoText = styled.h2`
  font-size: 2.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }

  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export {
  Container,
  CounterContainer,
  Counter,
  BoxContainer,
  BoxText,
  Box,
  InfoText,
};
