import React from 'react';
import styled, { keyframes } from 'styled-components';

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Divination>
        <LeftSpike />
        <span>ESPERI</span>
        <RightSpike/>
      </Divination>
      <Oracle>T<Sm>HE</Sm> O<Sm>RACLE</Sm></Oracle>
      <Gaze>Gaze into the eye and discover what the cards reveal</Gaze>
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media (max-width: 768px) {
    height: 60px;
  }
`;
const RightSpike = styled(LeftSpike)`
  transform: rotate(90deg);
`;
const Divination = styled.div`
  font-family: Bagnard;
  font-size: 2rem;
  display: flex;
  color: #b57902;
  letter-spacing: 4px;
  align-items: center;
  justify-content: center;
  gap: 70px;
  opacity: .7;
  margin-top: 15vh;

  @media (max-width: 768px) {
    gap: 30px;
    font-size: 1.5rem;
    margin-top: 8vh;
  }
`;

const blink = keyframes`
  0% { width: 100px; }
  1% { width: 0; }
  4% { width: 100px; }
  100% { width: 100px; }
`;
const Oracle = styled.div`
  font-family: 'Lora';
  color: white;
  font-size: 6rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  @media (max-width: 380px) {
    font-size: 2.8rem;
  }
`;
const Sm = styled.span`
  display: inline-block;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const Gaze = styled.p`
  font-family: Elsie Swash Caps;
  color: gray;
  font-size: 2rem;
  font-wrap: wrap; 

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 15px;
    text-align: center;
  }
`;

export default Welcome;
