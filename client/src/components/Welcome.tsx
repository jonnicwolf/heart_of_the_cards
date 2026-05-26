import React from 'react';
import styled, { keyframes } from 'styled-components';

const Welcome = () => {
  return (
    <>
      <WelcomeWrapper>
        <Divination>
          <LeftSpike />
          <span>ESPERI</span>
          <RightSpike/>
        </Divination>
        <Oracle>T<Sm>HE</Sm> O<Sm>RACLE</Sm></Oracle>
        <Gaze>Gaze into the eye and discover what the cards reveal</Gaze>
      </WelcomeWrapper>
    </>
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
  padding: 20px;

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

export default Welcome;