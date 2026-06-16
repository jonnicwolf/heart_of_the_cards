import React, { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Welcome from '../components/Welcome';
import QuestionBoard from '../components/QuestionBoard';
import Board from '../components/Board';

const Home: FC = () => {
  const [step, setStep] = useState(0);
  const [question, setQuestion] = useState('');
  
  const nextStep = () => {
     setStep(step+1);
  };
  function handleReload(): void {
    window.location.reload();
  };

  const steps = [
    {
      component: <Welcome />,
      button: <Button onClick={nextStep}>
        <span>⟡</span>Begin your reading
      </Button>
    },
    {
      component: <QuestionBoard setter={setQuestion} />,
      button: <Button onClick={nextStep}>
                <span>⟡</span>Draw your cards
              </Button>
    },
    {
      component: <Board question={question} />,
      button: <Button onClick={handleReload}>
                <span>⟡</span>Ask another question
              </Button>
    },
  ];

  return (
    <Container>
      {steps[step].component}
      {steps[step].button}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
  padding-top: 15vh;
  height: 100vh;
  overflow: scroll;
  width: 100vw;
  max-width: 2400px;
  align-self: center;

  @media only screen and (max-width: 375px) and (pointer: coarse) and (hover: none) {
    height: 90vh;
  }
  
`;
const Button = styled.button`
  background: none;
  text-align: center;
  font-size: 2rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  cursor: pointer;
  color: #b57902;
  border: 1px solid #b57902;
  padding: 20px;

  &: hover {
    border: 1px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
    color: white;
    transition: all 0.3s linear;
  }
  // @media only screen and (max-width: 500px) {
  //   width: 20vw;
  //   font-size: 1rem;
  //   transform: translateY(-40px)
  // }
  // @media only screen and (min-width: 701px) and (max-width: 1300px) {
  //   font-size: 1.5rem;
  //   width: 20vw;
  // }
`;

const blink = keyframes`
  0% { width: 100px; }
  1% { width: 0; }
  4% { width: 100px; }
  100% { width: 100px; }
`;
const EyeContainer = styled.div`
  clip-path: ellipse(45% 50% at 50% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${blink} 7s infinite;
`;

export default Home;
