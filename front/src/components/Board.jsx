import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled, { keyframes } from 'styled-components';

import Eye from '../components/p5/Eye';
import Card from '../components/p5/Card';
import Inquery from './forms/Inquery';

const Board = () => {
  const [reading, setReading] = useState(null);
  const [cards, setCards] = useState(null);

  // console.log('reading',reading)
  return (
    <Container>

      <EyeWrapper>
        <EyeLashContainer>
          <EyeLash_4 />
          <EyeLash_2 />
          <EyeLash_1 />
          <EyeLash_3 />
          <EyeLash_5 />
        </EyeLashContainer>
        <EyeContainer>
          <Eye width={100} height={300}/>
        </EyeContainer>
      </EyeWrapper>

      {cards && <CardContainer> {cards.map((card) => <Card key={uuidv4()} name_short={card.name_short} />)} </CardContainer>}
      {!cards && <Inquery cardSetter={setCards} readingSetter={setReading} />}
      {reading && <div>{reading}</div>}
    </Container>
  );
};

const EyeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  transform: translateX(-80px);
`;
const CardContainer = styled.div`
  width: 775px;
  height: 410px;
  display: flex;
  gap: 10px;
  overflow: hidden;
`;
const blink = keyframes`
  0% {
    width: 100px;
  }
  1% {
    width: 0;
  }
  4% {
    width: 100px;
  }
  100% {
    width: 100px;
  }
`;
const EyeContainer = styled.div`
  clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
  display: flex;
  justify-content: center;
  animation: ${blink} 7s infinite;
`;
const EyeLashContainer = styled.div`
  display: flex;
  transform: rotate(270deg) translateY(70px);
  height: 10%;
  align-items: center;
  gap: 5px;
`;
const EyeLash = styled.div`
  width: 25px;
  height: 1px;
  background-color: black;
  padding: 4px;
  border-radius: 5px;
`;
const EyeLash_1 = styled(EyeLash)`
  transform: rotate(90deg);
`;
const EyeLash_2 = styled(EyeLash)`
  transform: rotate(70deg);
`;
const EyeLash_3 = styled(EyeLash)`
  transform: rotate(-70deg);
`;
const EyeLash_4 = styled(EyeLash)`
  transform: rotate(50deg) translateX(7px);
  width: 18px;
`;
const EyeLash_5 = styled(EyeLash)`
  transform: rotate(-50deg) translateX(-7px);
  width: 18px;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94vh;
  width: 100%;
  gap: 10vh;
  z-index: 2;
`;

export default Board;
