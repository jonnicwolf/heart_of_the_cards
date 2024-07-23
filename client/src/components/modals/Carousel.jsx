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
        {cards.map(_,i => <PageCircleButton onClick={() => goTo(i)}/> )}
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid red;
  background-color: #fce6c5;
`;
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2vw;
`;
const PageCircleButton = styled.button`
  height: 1vw;
  width: 1vw;
  border-radius: 50%;
`;
