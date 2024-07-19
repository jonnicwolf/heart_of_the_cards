import React from 'react';
import styled from 'styled-components';

export default function HistoryCard() {
  return (
    <Container>
      <Date>01</Date>
      <Preview>
        <Reading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Reading>
        <Cards>
          <Dummy>woo</Dummy>
          <Dummy>woo</Dummy>
          <Dummy>woo</Dummy>
        </Cards>
      </Preview>
    </Container>
  );
};

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-apart;
  border: 10px double #c99c40;
`;
const Date = styled.h1`
  height: 30%;
  font-family: Bagnard;
  font-size: 4vw;
  margin: 0;
`;
const Preview = styled.div`
  height: 70%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
const Reading = styled.p`
  padding: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20%;
`;
const Cards = styled.div`
  display: flex;
  height: 80%;
`;
const Dummy = styled.span`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  text-align: center;
`;
