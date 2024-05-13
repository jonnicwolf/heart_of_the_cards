import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import Eye from '../components/p5/Eye';
import Card from '../components/p5/Card';
import Inquery from './forms/Inquery';

const Board = () => {
  const [question, setQuestion] = useState(null);
  const [cards, setCards] = useState(null);

  return (
    <Container>
      <Eye />
      {cards &&
        <CardContainer>
          {cards.map((card, i) => {
            console.log(card, i, 'card')
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
  width: 780px;
  height: 410px;
  display: flex;
  gap: 10px;
  overflow: hidden;
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
