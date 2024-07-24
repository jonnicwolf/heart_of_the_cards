import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';
import WelcomeCard from './WelcomeCard';
import HIWCard from './HIWCard';
import GetStartedCard from './GetStartedCard';

export default function Modal ({ setter }) {
  const cards = [
    <WelcomeCard />,
    <HIWCard />,
    <GetStartedCard setter={setter} />,
  ];

  return (
    <Container>
      <Carousel cards={cards} setter={setter}/>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  z-index: 3;
`;
