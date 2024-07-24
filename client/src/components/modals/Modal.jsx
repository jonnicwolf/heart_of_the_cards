import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';
import Card from './WelcomeCard';

export default function Modal() {
  const cards = [
    <Card />
  ]
  return (
    <Container>
      <Carousel cards={cards} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  padding-top: 10vh;
`;
