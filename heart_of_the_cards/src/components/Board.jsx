import React, { useState } from 'react';
import styled from 'styled-components';

import Eye from '../components/p5/Eye';
import Card from '../components/p5/Card';
import Inquery from './forms/Inquery';

const Board = () => {
  const [question, setQuestion] = useState(null);
  const [cards, setCards] = useState([]);
  console.log(cards.length)
  return (
    <Container>
      <Eye />
      {
        cards && 
        <CardContainer>
          {cards.map((card,i) => {
            return (
              <>
                <Card key={i}name_short={card.name_short} />
              </>
            )
          })}
        </CardContainer>
      }
      {cards.length < 1 && <Inquery cardSetter={setCards} questionSetter={setQuestion} />}
    </Container>
  );
};

const CardContainer = styled.div`
  width: 70vw;
  height: auto;
  display: flex;
  gap: 1vw;
  justify-content: space-between;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94vh;
  width: 100%;
  gap: 20vh;
  z-index: 2;
`;

export default Board;
