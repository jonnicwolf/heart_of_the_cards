import React, { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Welcome from '../components/Welcome';
import QuestionBoard from '../components/QuestionBoard';
import Board from '../components/Board';

const Home: FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
     setStep(step+1);
  };

  const steps = [
    {
      component: <Welcome />,
      button: 'Begin your reading'
    },
    {
      component: <QuestionBoard />,
      button: 'Draw your cards'
    },
    {
      component: <Board />,
      button: 'Ask another question'
    },
  ];
  return (
    <Container>
      {steps[step].component}
      <Button
        onClick={nextStep}
      ><span>⟡</span> {steps[step].button}</Button>
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
  background-color: #000;

  // @media only screen and (max-width: 375px) and (pointer: coarse) and (hover: none) {
  //   height: 90vh;
  // }
  // @media only screen and (min-width: 321px) and (max-width: 375px) and (pointer: coarse) and (hover: none) {
  //   height: 93vh;
  // }
  // @media only screen and (min-width: 376px) and (max-width: 500px) and (pointer: coarse) and (hover: none) {
  //   height: 94vh;
  // }
  // @media only screen and (min-width: 501px) and (max-width: 770px) and (pointer: coarse) and (hover: none) {
  //   height: 92vh;
  // }
  // @media only screen and (min-width: 771px) and (max-width: 1000px) and (pointer: coarse) and (hover: none) {
  //   height: 93vh;
  // }
  // @media only screen and (min-width: 1000px) and (max-width: 1300px) and (pointer: coarse) and (hover: none) {
  //   height: 90vh;
  // }
  // @media only screen and (min-width: 750px) and (max-width: 1000px) {
  //   height: 92vh;
  // }
  // @media only screen and (min-width: 1001px) and (max-width: 1300px) {
  //   height: 92vh;
  // }
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
