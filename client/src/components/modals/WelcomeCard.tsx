import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import Eye from '../p5/Eye'

const WelcomeCard: FC = () => {
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
          <Eye width={80} height={160} tracksMouse />
        </EyeContainer>
      </EyeWrapper>
      
      <Welcome>
        Esperi
      </Welcome>

      <Message>
        At Esperi, we merge ancient tarot wisdom with modern technology to offer you a unique and insightful reading experience. Our app provides personalized tarot readings that illuminate your path and guide you through life's mysteries.
      </Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  gap: 40px;
`;
const Welcome = styled.div`
  font-family: Bagnard;
  font-size: 3rem;
  text-align: center;
  
  @media only screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;
const Message = styled.p`
  font-family: Bagnard;
  text-align: center;
  padding: 30px;
  font-size: 1.5rem;
  @media only screen and (max-width: 720px) {
    font-size: 1rem;
  }
`;

const blink = keyframes`
  0% { width: 100px; }
  1% { width: 0; }
  4% { width: 100px; }
  100% { width: 100px; }
`;
const EyeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  transform: translateX(-60px);
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

export default WelcomeCard;
