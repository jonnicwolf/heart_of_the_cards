import React, { useState } from 'react';
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

  function readingParser(tarotString) {
    const lines = tarotString.trim().split('\n');
    let matrix = [];
    console.log(lines)
    lines.forEach(line => {
        line = line.trim();
        console.log('line:', line)
        // Check if the line starts with a number followed by a dot and a space
        if (!Number.isNaN(line[0]) && line[1] === '.' && line[2] === ' ') {
          const colonIndex = line.indexOf(':');
          const title = line.substring(3, colonIndex).trim();
          const description = line.substring(colonIndex + 1).trim();

          matrix.push([title, description]);
        }
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
    queryFn: ()=>get_tarot_reading(question, cards?.cards.map(item => item.name)),
    enabled: !!question && !!cards,
  });

  const parsedReading = reading
    ? readingParser(reading.choices[0].message.content)
    : '';

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

      {cards && 
        <CardContainer> 
          {cards.cards.map((card) => <Card key={uuidv4()} name_short={card.name_short} />)}
        </CardContainer>
      }
      {!cards && <Inquery questionSetter={setQuestion} runFetchSetter={setRunFetch} />}
      {cards && parsedReading && 
        <ReadingContainer>
          {parsedReading.map((item, i) => (
            <CardReading key={uuidv4()}>
              <CardHeader>{item[0]}</CardHeader>
              <CardP>{item[1]}</CardP>
            </CardReading>
          ))}
        </ReadingContainer>
      }
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
  gap: 5vh;
  z-index: 2;
`;
const ReadingContainer = styled.div`
  height: 21vh;
  width: 80vw;
  max-width: 1200px;
  color: white;
  overflow: scroll;
  background: rgba(0,0,0,0.4);
  border: 1px blur white;
  padding: 15px;
`;
const CardReading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardHeader = styled.h2`
  font-family: Bagnard;
  font-size: 3rem;
`;
const CardP = styled.p`
  font-family: Amatic SC;
  font-size: 2rem;
`;

export default Board;
