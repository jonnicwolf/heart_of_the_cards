import React, { FC } from 'react';
import styled from 'styled-components';


interface Props {
  day: string,
  reading: string,
  cards: string[],
};

const HistoryCard: FC<Props> = ({ day, reading, cards }) => {
  return (
    <Container>
      <Date>{day}</Date>
      <Preview>
        <Reading>{reading}</Reading>
        <Cards>
          {cards.map( card => <Card src={card} />)}
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
const Card = styled.img`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  text-align: center;
`;

export default HistoryCard;
