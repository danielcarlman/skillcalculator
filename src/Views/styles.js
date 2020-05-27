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
  justify-content: ${(props) => (props.isClicked ? 'center' : 'space-between')};
  align-items: center;
  background-color: red;
  border-radius: 30px;
  text-align: center;
  margin: 5rem;
  padding: 1rem 5rem;
  width: 80%;
`;

const BoxText = styled.h2`
  font-size: 5rem;
  font-weight: 700;
`;

const BoxSmallText = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  line-height: 5rem;
`;

export { Container, BoxText, Box, BoxSmallText };
