import React, { useState } from 'react';
import { analytics } from '../../firebase';
import { logEvent } from 'firebase/analytics';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import styled, { keyframes } from 'styled-components';

import Eye from '../components/p5/Eye';
import Card from '../components/p5/Card';
import Inquery from './forms/Inquery';

import { get_tarot_reading } from '../openai_scripts/get_tarot_reading';

const Board = () => {
  const [question, setQuestion] = useState('');
  const [runFetch, setRunFetch] = useState(false);

  function handleReload () {
    return window.location.reload();
  };

  function readingParser (tarotString) {
    const lines = tarotString.trim().split('\n');
    let matrix = [];
    lines.forEach(line => {
      line = line.trim();

      // Check if the line starts with a number followed by a dot and a space
      if (!Number.isNaN(line[0]) && line[1] === '.' && line[2] === ' ') {
        const colonIndex = line.indexOf(':');
        const title = line.substring(3, colonIndex).trim();
        const description = line.substring(colonIndex + 1).trim();
        matrix.push([title, description]);
      };
    });

    return matrix;
  };

  const getCards = async () => {
    try {
      const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=3');
      return response.json();
    }
    catch (error) { throw new Error('getCard error: ', error) };
  };

  const {data: cards} = useQuery({
    queryKey: ['cards'],
    queryFn: getCards,
    enabled: runFetch,
  });

  const {data: reading} = useQuery({
    queryKey: ['reading'],
    queryFn: ()=> get_tarot_reading(question, cards?.cards.map(item => item.name)),
    enabled: !!question && !!cards,
  });

  

  const parsedReading = reading
    ? readingParser(reading.choices[0].message.content)
    : '';

  const windowWidth = window.innerWidth < 500;

  function renderReading () {
    return (
      <ReadingContainer windowWidth={windowWidth}>
        {parsedReading.map((item, index) => (
          <CardReading key={uuidv4()}>
            <CardHeader>{item[0]}</CardHeader>
            <CardContainer>
              {cards && <Card key={uuidv4()} name_short={cards.cards[index].name_short} />}
            </CardContainer>
            <br />
            <CardP>{item[1]}</CardP>
          </CardReading>
        ))}
        <Reload onClick={handleReload}>Ask Another</Reload>
      </ReadingContainer>
    );
  };

  function renderInquiry () {
    return (
      <Inquery questionSetter={setQuestion} runFetchSetter={setRunFetch} />
    );
  };

  function renderEye () {
    return (
      <EyeWrapper>
        <EyeLashContainer>
          <EyeLash_4 />
          <EyeLash_2 />
          <EyeLash_1 />
          <EyeLash_3 />
          <EyeLash_5 />
        </EyeLashContainer>

        <EyeContainer>
          <Eye width={100} height={windowWidth ? 200 : 300}/>
        </EyeContainer>
      </EyeWrapper>
    );
  };

  function renderBoard() {
    if (!runFetch) {
      logEvent(analytics, 'reading_initiated')
      return ( <> {renderInquiry()} </> )
    }
    else return (
      <>
        {renderEye()}
        {cards && reading && renderReading()}
      </>
    );
  };

  return (
    <Container>
      {renderBoard()}
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
  width: 250px;
  height: 405px;
  overflow: hidden;
`;
const blink = keyframes`
  0% { width: 100px; }
  1% { width: 0; }
  4% { width: 100px; }
  100% { width: 100px; }
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
  height: 100%;
  width: 100%;
  gap: 5vh;
  z-index: 2;
`;
const ReadingContainer = styled.div`
  height: ${props => props.windowWidth ? '40vh' : '21vh'};
  width: 80vw;
  max-width: 1200px;
  color: white;
  overflow: scroll;
  background: rgba(0,0,0,0.4);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardReading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
`;
const CardHeader = styled.h2`
  font-family: Bagnard;
  font-size: 7vw;
  text-align: center;
`;
const CardP = styled.p`
  font-family: Bebas Neue;
  font-size: 4vw;
  text-align: center;

`;
const Reload = styled.button`
  width: 300px;
  background: none;
  border: none
  text-align: center;
  align-self: center;
  color: #e1c4ca;
  font-size: 4rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  transform: translateY(-60px);
  cursor: pointer;
  transition: all 0.3s linear;
  &: hover {
    border: 2px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
  }
  @media only screen and (max-width: 500px) {
    width: 20vw;
    font-size: 1rem;
    transform: translateY(-40px)
  }
  @media only screen and (min-width: 701px) and (max-width: 1300px) {
    font-size: 1.5rem;
    width: 20vw;
  }
`;

export default Board;
