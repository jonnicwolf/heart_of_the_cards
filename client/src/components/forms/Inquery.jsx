import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Inquery = ({ questionSetter, runFetchSetter }) => {
  const questions = [
    'Burning question?',
    'Perhaps a major dilemma?',
    'Significant matter?',
    'Pressing concern?',
    'Pour the tea.',
    'Critical matter?',
    'Tell me.',
    'Welcome, ask away.',
    'Ready when you are, ask away.',
    'What would you like to know?'
  ];
  const randomQuestion = questions[Math.floor(Math.random() * (questions.length + 1))];
  const [question, setQuestion] = useState(randomQuestion);

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 200px;
  background: none;
  border: none
  text-align: center;
  color: #e1c4ca;
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
  width: 60vw;
  height: 30vh;
  border: none;
  border-radius: 30px;
  max-height: 400px;
  background: rgb(0,0,0,0.6);
  text-align: center;
  color: #e1c4ca;
  font-size: 3rem;
  font-family: 'Lora';
  font-weight: bold;
  &::placeholder {
    color: white;
  }
  &:focus::placeholder {
    color: transparent;
    text-wrap: pretty;
  }
  @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
    width: 95vw;
    height: 25vh;
  }
  @media only screen and (min-width: 701px) and (max-width: 1300px) {
    font-size: 2rem;
    width: 95vw;
    height: 25vh;
  }
`;

export default Inquery;
