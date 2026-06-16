import { FC, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import styled, { keyframes } from 'styled-components';
import { randomCards, cards } from '../../public/directory';

import Eye from './p5/Eye';
import Card from './p5/Card';
import Inquery from './forms/Inquery';
import Loader from './Loader.tsx';

import { get_tarot_reading } from '../openai_scripts/get_tarot_reading.ts';
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
};

interface StyleProps {
  windowWidth: boolean;
};
interface Props {
  question: string;
};
interface Cards {
  name: string;
  code: string;
}
const Board: FC<Props> = ({
  question,
}) => {
  const [dealtCards, setDealtCards] = useState<Cards[]>([]);
  const [chatRes, setChatRes] = useState('');

  useEffect(() => {
    if (cards && dealtCards.length === 0) setDealtCards(randomCards(cards))
  }, [cards])

  function handleReload(): void {
    window.location.reload();
  };
  const times = ['PAST', 'PRESENT', 'FUTURE'];

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
      }});

    return matrix;
  };

  const { data: reading } = useQuery<ChatCompletion, Error>({
    queryKey: ['reading', question, dealtCards],
    // @ts-ignore
    queryFn: async () => {
      if (!question) throw new Error("Missing question prerequisite.")
      else if (dealtCards.length === 0) throw new Error("Missing card prerequisite.")

      const cardNames = dealtCards.map(c => c.name);
      const result = await get_tarot_reading(question, cardNames);

      if (!result) throw new Error("AI returned an empty reponse.");

      return result;
    },
    enabled: !!question && dealtCards.length > 0,
  });

  const parsedReading: [string, string][] | '' = reading
    // @ts-ignore
    ? readingParser(reading.choices[0].message.content)
    : '';

  function renderReading(): JSX.Element | null {
    if (!parsedReading || !dealtCards) return null;
    return (
      <>
        {/* @ts-ignore */}
        <ReadingContainer>
          <CardP style={{color: 'white'}}>THE CARDS HAVE SPOKEN</CardP>
          
          {dealtCards.map((card, i) => (
            <CardReadingRow key={card.code}>
              <CardHeaderBlock>
                <TimePeriodLabel>{times[i]}</TimePeriodLabel>
                <CardNameTitle>{card.name}</CardNameTitle>
              </CardHeaderBlock>

              <FlexContentRow>
                <CardCanvasWrapper>
                  <Card name_short={card.code} />
                </CardCanvasWrapper>

                {parsedReading[i] && (
                  <DropCapInterpretation>
                    {parsedReading[i][1]}
                  </DropCapInterpretation>
                )}
              </FlexContentRow>
    
            </CardReadingRow>
          ))}
        </ReadingContainer>
      </>
    )};

  function loader(): JSX.Element {
    return (
      <LoadingContainer>
        <Loader/>
        <P>The spirits are channeling your reading...</P>
        <CardBox>
        {/* @ts-ignore */}
          {dealtCards && dealtCards.map((card, i) => (
            <>
            <CardReading key={uuidv4()}>
              <CardHeader>
                <TitleBox>
                  <Sm>{times[i]}</Sm>
                  <span>{card.name}</span>
                </TitleBox>
              </CardHeader>

              <CardContainer>
                {/* @ts-ignore */}
                {dealtCards[i] && (
                  <Card
                    key={uuidv4()}
                    name_short={card.code} /> )}
                </CardContainer>
              </CardReading>
            </>
            ))}
        </CardBox>
      </LoadingContainer>
    );
  };


  // function renderEye(): JSX.Element {
  //   return (
  //     <EyeWrapper>
  //       <EyeLashContainer>
  //         <EyeLash_4 />
  //         <EyeLash_2 />
  //         <EyeLash_1 />
  //         <EyeLash_3 />
  //         <EyeLash_5 />
  //       </EyeLashContainer>

  //       <EyeContainer>
  //         <Eye width={100} height={windowWidth ? 200 : 300} tracksMouse />
  //       </EyeContainer>
  //     </EyeWrapper>
  //   );
  // };

  // @ts-ignore
  function renderBoard(): JSX.Element | null {
    if (!reading) {
     return loader();
    }
    else {
      return renderReading()!;
    };
  };

  return <Container>
    {
      renderBoard()
    }
  </Container>;
};

const CardFoo = styled.div`
  display: flex;
  gap: 10px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardBox = styled.div`
  display: flex;
  gap: 2vw;
`;
const Sm = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-family: Bebas Neue;
  letter-spacing: 0.07em;
  color: gray;
`;
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
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
const P = styled.p`
  font-family: Elsie Swash Caps;
  color: gray;
  color: red;
  font-size: 2rem;
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
  // height: 100%;
  // width: 100%;
  // gap: 5vh;
  z-index: 2;
`;

const ReadingContainer = styled.div<StyleProps>`
  // height: 60vh;
  // width: 80vw;
  max-width: 1200px;
  color: white;
  // overflow: scroll;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const CardReading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
`;
const CardReading1 = styled.div`
  justify-content: left;
`;

const CardHeader = styled.span`
  font-family: Bagnard;
  text-align: center;
  color: white;
  font-size: 2rem;
  // @media only screen and (max-width: 720px) {
  //   font-size: 2rem;
  // }
`;

const CardP = styled.p`
  font-family: Bebas Neue;
  font-size: 2rem;
  text-align: center;
  padding: 10px;
  // @media only screen and (max-width: 720px) {
  //   font-size: 1rem;
  // }
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

const CardReadingRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin-bottom: 8vh;
`;

const CardHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
  padding-bottom: 5px;
`;

const TimePeriodLabel = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: #888;
`;

const CardNameTitle = styled.h2`
  font-family: 'Bagnard', serif;
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
`;

const FlexContentRow = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardCanvasWrapper = styled.div`
  flex-shrink: 0; // Prevents the text from squeezing your canvas smaller
  width: 240px;
  height: 400px;
  overflow: hidden;
`;

const DropCapInterpretation = styled.p`
  font-family: 'Bebas Neue', sans-serif; /* Your original paragraph font choice */
  font-size: 1.6rem;
  line-height: 1.4;
  color: #e0e0e0;
  margin: 0;
  text-align: justify;

  /* Drop Cap */
  &::first-letter {
    font-family: 'Bagnard', 'Elsie Swash Caps', serif; /* Use a dramatic font for dropcap */
    font-size: 4.8rem;
    float: left;
    line-height: 0.85;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    color: #e1c4ca; /* Soft rosy-gold highlight accent */
    font-weight: bold;
  }
`;

export default Board;
