import React, { FC, useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ScrollToTop from '../ScrollToTop';

interface Props {
  cards: JSX.Element[],
  setter: (isOpen: boolean) => void,
};

const Carousel: FC<Props> = ({ cards, setter }) => {
  const navigate = useNavigate();
  const id = useId();
  const [currentCard, setCurrentCard] = useState<number>(0);

  function handleNext (): void {
    currentCard >= cards.length-1 ? setCurrentCard(0) : setCurrentCard(currentCard + 1);
  };
  function handlePrev (): void {
    currentCard <= 0 ? setCurrentCard(cards.length-1) : setCurrentCard(currentCard - 1);
  };
  function goTo (cardNumber: number): void {
    setCurrentCard(cardNumber);
  };
  function handleExit (): void {
    setter(false);
    navigate('/');
  };

  return (
    <BorderContainer>
      <Exit onClick={handleExit}>X</Exit>

      {cards[currentCard]}
      <ScrollToTop />

      <Pagination>
        <SlideButton onClick={handlePrev}>◀</SlideButton>
        {cards.map((_,i) => <PageCircleButton id={id+i} onClick={() => goTo(i)}/> )}
        <SlideButton onClick={handleNext}>▶</SlideButton>
      </Pagination>
    </BorderContainer>
  );
};

export const BorderContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;

  --s: 5px;
  padding: var(--s);
  border: calc(5*var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-3*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
  background-color: #fce6c5;

  @media only screen and (max-width: 720px) {
    width: 90%;
  }
`;
const Exit = styled.button`
  background: none;
  width: 10%;
  align-self: flex-end;
  margin: 5px;
  background: none;
  border: none
  text-align: center;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &: hover {
    border: 2px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
    color: white;
    transition: all 0.3s linear;
  }
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

export default Carousel;
