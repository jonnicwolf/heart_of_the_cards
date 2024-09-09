import React, { FC, useState } from 'react';
import { analytics } from '../../firebase';
import { logEvent } from 'firebase/analytics';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import styled, { keyframes } from 'styled-components';

import Eye from './p5/Eye';
import Card from './p5/Card';
import Inquery from './forms/Inquery';

import { get_tarot_reading } from '../openai_scripts/get_tarot_reading';
import { ChatCompletion } from 'openai/resources/index.mjs';

interface TarotCard {
  desc: string;
  name: string;
  name_short: string;
  meaning_up: string;
  meaning_rev: string;
  suit: string;
  type: string;
  value: string;
  value_int: number;
};

interface CardsResponse {
  cards: TarotCard[];
}

interface Props {
  windowWidth: boolean;
}

const Board: FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [runFetch, setRunFetch] = useState<boolean>(false);

  function handleReload(): void {
    window.location.reload();
  }

  function readingParser(tarotString: string): [string, string][] {
    const lines: string[] = tarotString.trim().split('\n');
    const matrix: [string, string][] = [];

    lines.forEach(line => {
      line = line.trim();

      if (!isNaN(parseInt(line[0])) && line[1] === '.' && line[2] === ' ') {
        const colonIndex: number = line.indexOf(':');
        const title: string = line.substring(3, colonIndex).trim();
        const description: string = line.substring(colonIndex + 1).trim();
        matrix.push([title, description]);
      }
    });

    return matrix;
  }

  const getCards = async (): Promise<CardsResponse> => {
    try {
      const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=3');
      if (!response.ok) throw new Error('Failed to fetch cards');
      return await response.json();
    } catch (error: any) {
      throw new Error(`getCard error: ${error.message}`);
    }
  };

  const { data: cards } = useQuery<CardsResponse, Error>({
    queryKey: ['cards'],
    queryFn: getCards,
    enabled: runFetch,
  });

  const { data: reading } = useQuery<ChatCompletion, Error>({
    queryKey: ['reading'],
    // @ts-ignore
    queryFn: () => get_tarot_reading(question, cards?.cards.map(item => item.name)),
    enabled: !!question && !!cards,
  });

  const parsedReading: [string, string][] | '' = reading
    // @ts-ignore
    ? readingParser(reading.choices[0].message.content)
    : '';

  const windowWidth: boolean = window.innerWidth < 500;

  function renderReading(): JSX.Element | null {
    if (!parsedReading || !cards) return null;
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

  function renderInquiry(): JSX.Element {
    return <Inquery questionSetter={setQuestion} runFetchSetter={setRunFetch} />;
  };

  function renderEye(): JSX.Element {
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
          <Eye width={100} height={windowWidth ? 200 : 300} tracksMouse />
        </EyeContainer>
      </EyeWrapper>
    );
  };

  function renderBoard(): JSX.Element {
    if (!runFetch) {
      logEvent(analytics, 'reading_initiated');
      return <>{renderInquiry()}</>;
    } else {
      return (
        <>
          {renderEye()}
          {cards && reading && renderReading()}
        </>
      );
    };
  };

  return <Container>{renderBoard()}</Container>;
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

const ReadingContainer = styled.div<Props>`
  height: 60vh;
  width: 80vw;
  max-width: 1200px;
  color: white;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.7);
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
  font-size: 6rem;
  text-align: center;
  @media only screen and (max-width: 720px) {
    font-size: 2rem;
  }
`;

const CardP = styled.p`
  font-family: Bebas Neue;
  font-size: 2rem;
  text-align: center;
  @media only screen and (max-width: 720px) {
    font-size: 1rem;
  }
`;

const Reload = styled.button`
  width: 300px;
  background: none;
  border: none;
  text-align: center;
  align-self: center;
  color: #e1c4ca;
  font-size: 4rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  transform: translateY(-60px);
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    border: 2px solid #e1c4ca;
    background: rgba(65, 50, 63, 0.9);
  }
  @media only screen and (max-width: 500px) {
    width: 20vw;
    font-size: 1rem;
    transform: translateY(-40px);
  }
  @media only screen and (min-width: 701px) and (max-width: 1300px) {
    font-size: 1.5rem;
    width: 20vw;
  }
`;

export default Board;
