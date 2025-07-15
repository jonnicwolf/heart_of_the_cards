import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  questionSetter: (question: string) => void,
  runFetchSetter: (fetch: boolean) => void,
};

const Inquery: FC<Props> = ({ questionSetter, runFetchSetter }) => {
  const questions = [
    // 'Burning question?',
    // 'Perhaps a major dilemma?',
    // 'Pressing concern?',
    // 'Pour the tea.',
    // 'Critical matter?',
    // 'Tell me!',
    // 'Welcome, ask away!',
    'Ready when you are, ask away!',
    'What would you like to know?'
  ];

  const randomQuestion: string = questions[Math.floor(Math.random() * (questions.length + 1))];
  const [question, setQuestion] = useState<string>(randomQuestion);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuestion(randomQuestion);
    }, 30000);

    return () => clearInterval(interval);
  }, [question]);

  const handleChange = (e) => questionSetter(e.target.value);

  function handleSubmit (e) {
    e.preventDefault();
    runFetchSetter(true);
  };

  return (
    <Container>
      <Query onChange={handleChange} placeholder={question} />
      <Button onClick={handleSubmit}>submit</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // overflow: scroll;
  width: 80%;

  --s: 10px;
  padding: var(--s);
  border: calc(5*var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-3*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
  background-color: #fce6c5;

  @media only screen and (max-width: 720px) {
    width: 80%;
  }
`;
const Button = styled.button`
  width: 200px;
  background: none;
  border: none
  text-align: center;
  font-size: 3rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  transform: translateY(-80px);
  cursor: pointer;
  &: hover {
    border: 2px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
    color: white;
    transition: all 0.3s linear;
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
const Query = styled.input`
  height: 30vh;
  max-height: 400px;
  width: 100%;
  background-color: #fce6c5;
  text-align: center;
  font-size: 3rem;
  font-family: 'Lora';
  font-weight: bold;
  border: none;
  text-wrap: wrap;

  &::placeholder {
    color: #4a4a4a;
    font-style: italic;
    animation: blink 1.2s infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1 }
    50% { opacity: 0.3 }
  }
  &:focus::placeholder {
    color: transparent;
    text-wrap: pretty;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 0.9rem;
    width: 95vw;
    height: 55vh;
  }
  @media only screen and (max-height: 1400px) {
    height: 50vh;
  }
`;

export default Inquery;
