import React, { useState } from 'react';
import styled from 'styled-components';

export default function Carousel({ cards }) {
  const [currentCard, setCurrentCard] = useState(0);

  function handleNext () {
    currentCard >= cards.length-1 ? setCurrentCard(0) : setCurrentCard(currentCard + 1);
  };
  function handlePrev () {
    currentCard <= 0 ? setCurrentCard(cards.length-1) : setCurrentCard(currentCard - 1);
  };
  function goTo (cardNumber) {
    setCurrentCard(cardNumber);
  };

  return (
    <Container>
      {cards[currentCard]}
      <Pagination>
        <SlideButton onClick={handlePrev}>◀</SlideButton>
        {cards.map((_,i) => <PageCircleButton onClick={() => goTo(i)}/> )}
        <SlideButton onClick={handleNext}>▶</SlideButton>
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 80%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  --s: 5px;
  padding: var(--s);
  border: calc(5*var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-3*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
  background-color: #fce6c5;
`;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5vw;
  align-items: center;
`;
const SlideButton = styled.button`
  background: none;

  &:hover {
    scale: 1.1;
  }
`;
const PageCircleButton = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid grey;

  &:hover {
    scale: 1.1;
  }
`;
