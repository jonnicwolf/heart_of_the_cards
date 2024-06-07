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

  const readingString = `1. Page of Swords: This card suggests that there may be some skepticism or criticism towards the project from others. It could indicate that not everyone will immediately warm up to the idea or see its potential. However, it also encourages you to stay true to your vision and be open to constructive feedback.

  2. Queen of Pentacles: The Queen of Pentacles represents practicality, abundance, and nurturing energy. This card suggests that the project has the potential to be well-received by others, especially if you approach it with a grounded and nurturing mindset. People may appreciate the stability and tangible benefits that the project can bring.
  
  3. Nine of Pentacles: This card signifies success, independence, and self-sufficiency. It suggests that the project has the potential to attract attention and admiration from others. People may be impressed by your hard work, dedication, and the high-quality results that the project can deliver. Overall, this card indicates a positive outcome in terms of how people will perceive the project.`

  function readingParser(tarotString) {
    const lines = tarotString.trim().split('\n');
    let htmlString = '';

    lines.forEach(line => {
        line = line.trim();
        // Check if the line starts with a number followed by a dot and a space
        if (!Number.isNaN(line[0]) && line[1] === '.' && line[2] === ' ') {
          const colonIndex = line.indexOf(':');
          const title = line.substring(3, colonIndex).trim();
          const description = line.substring(colonIndex + 1).trim();

          htmlString += `<h2>${title}</h2>\n<p>${description}</p>\n`;
        }
        else htmlString += `<p>${line}</p>\n`;
    });

    return htmlString;
  }

  // const getCards = async () => {
  //   try {
  //     const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=3');
  //     return response.json();
  //   }
  //   catch (error) { throw new Error('getCard error: ', error) };
  // };

  // const {data: cards} = useQuery({
  //   queryKey: ['cards'],
  //   queryFn: getCards,
  //   enabled: runFetch,
  // });

  // const {data: reading} = useQuery({
  //   queryKey: ['reading'],
  //   queryFn: ()=>get_tarot_reading(question, cards?.cards.map(item => item.name)),
  //   enabled: !!question && !!cards,
  // });

  // console.log('reading in board', reading)
  // console.log('card', cards)

  const parsedReading = readingParser(readingString)
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

      {/* {cards && 
        <CardContainer> 
          {cards.cards.map((card) => <Card key={uuidv4()} name_short={card.name_short} />)}
        </CardContainer>}
        {reading && <Reading> {reading.choices[0].message.content} </Reading>}
          
      {!cards && <Inquery questionSetter={setQuestion} runFetchSetter={setRunFetch} />} */}
      <Reading>
        {parsedReading}
      </Reading>
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
const Reading = styled.div`
  height: 20vh;
  width: 50vw;
  max-width: 1200px;
  color: white;
`;

export default Board;
