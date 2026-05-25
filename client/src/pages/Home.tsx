import React, { FC, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Board from '../components/Board';
// @ts-ignore
import Modal from '../components/modals/Modal';
import Starfield from '../components/p5/Starfield';
import Eye from '../components/p5/Eye';

const Home: FC = () => {
  return (
    <Container>
      <WelcomeWrapper>
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Divination>
          <LeftSpike />
          <span>ESPERI</span>
          <RightSpike/>
        </Divination>
        <Oracle>T<Sm>HE</Sm> O<Sm>RACLE</Sm></Oracle>
        <Gaze>Gaze into the eye and discover what the cards reveal</Gaze>
      </WelcomeWrapper>
      <Button><span>⟡</span> Begin your reading</Button>
    </Container>
  );
};

const Middleline = styled.span`
  height: 100vh;
  width: 1px;
  outline: 1px solid red;
  z-index: 99;
  
  top: 0;
  right: 0;
  left: 0;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  align-items: center;
  height: 100%;
  width: 100vh;
  max-width: 2400px;
  align-self: center;
  background-color: #000;

  @media only screen and (max-width: 375px) and (pointer: coarse) and (hover: none) {
    height: 90vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 375px) and (pointer: coarse) and (hover: none) {
    height: 93vh;
  }
  @media only screen and (min-width: 376px) and (max-width: 500px) and (pointer: coarse) and (hover: none) {
    height: 94vh;
  }
  @media only screen and (min-width: 501px) and (max-width: 770px) and (pointer: coarse) and (hover: none) {
    height: 92vh;
  }
  @media only screen and (min-width: 771px) and (max-width: 1000px) and (pointer: coarse) and (hover: none) {
    height: 93vh;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) and (pointer: coarse) and (hover: none) {
    height: 90vh;
  }
  @media only screen and (min-width: 750px) and (max-width: 1000px) {
    height: 92vh;
  }
  @media only screen and (min-width: 1001px) and (max-width: 1300px) {
    height: 92vh;
  }
`;
const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // max-width: 1200px;
  width: 100%;
  z-index: 1;
`;
const LeftSpike = styled.div`
  height: 120px;
  width: 1px;
  border: 1px solid #b57902;
  background: linear-gradient(#b57902, #000);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  transform: rotate(270deg);
`;
const RightSpike = styled(LeftSpike)`
  transform: rotate(90deg);
`;
const Divination = styled.div`
  font-family: Lora;
  font-family: Bagnard;
  font-size: 2rem;
  display: flex;
  color: #b57902;
  letter-spacing: 4px;
  align-items: center;
  justify-content: center;
  gap: 70px;
  opacity: .7;
  margin-top: 20rem;
`;
 const Question = styled.p`
  font-size: 2.5rem;
  font-family: 'Lora';
  font-weight: bold;
  color: #4a4a4a;
  font-style: italic;
  text-align: center;
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
const Oracle = styled.div`
  font-family: 'Lora';
  color: white;
  font-size: 6rem;
`;
const Sm = styled.span`
  display: inline-block;
  font-size: 4rem;
`;
const Gaze = styled.p`
  font-family: Elsie Swash Caps;
  color: gray;
  font-size: 2rem;
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
  padding: 10px;

  &: hover {
    border: 2px solid #e1c4ca;
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

export default Home;
