import React from 'react';
import styled from 'styled-components';

import example from '../../assets/example.mp4'

export default function HIWCard() {
  
  return (
    <Container>
      <Title>How it works</Title>
      <Example autoPlay loop muted>
        <source src={example} type='video/mp4' />
      </Example>
      <Message>
        Enter your question into the provided box, and you'll receive a meticulously detailed tarot reading. This reading will include a thorough breakdown of each card drawn, along with in-depth interpretations to help you gain a deeper understanding of the insights and guidance they offer.
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
  gap: 10px;
  font-family: Bagnard;
`;
const Title = styled.h1`
  font-family: Bagnard;
  font-size: 3rem;
  text-align: center;
`;
const Example = styled.video`
  width: 80%;
`;
const Message = styled.p`
  font-family: Bagnard;
  text-align: center;
  padding: 30px;
`;
