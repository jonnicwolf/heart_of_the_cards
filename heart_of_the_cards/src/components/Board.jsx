import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled, { keyframes } from 'styled-components';

import Eye from '../components/p5/Eye';
import Card from '../components/p5/Card';
import Inquery from './forms/Inquery';

const Board = () => {
  const [question, setQuestion] = useState(null);
  const [cards, setCards] = useState(null);



  return (
    <Container>
      <EyeContainer>
        <Eye width={100} height={300}/>
      </EyeContainer>

      {cards &&
        <CardContainer>
          {cards.map((card, i) => {
            return (
              <Card key={uuidv4()} name_short={card.name_short} />
            )
          })}
        </CardContainer>
      }
      {!cards && <Inquery cardSetter={setCards} questionSetter={setQuestion} />}
    </Container>
  );
};

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
  50% {
    width: 0;
  }
  100% {
    width: 100px;
  }
`
const EyeContainer = styled.div`
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);  
  width: 100px;
  display: flex;
  justify-content: center;
  animation: ${blink} 0.3s infinite;
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
