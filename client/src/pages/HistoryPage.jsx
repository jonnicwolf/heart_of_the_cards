import { Page } from 'openai/pagination.mjs';
import React from 'react';
import styled from 'styled-components';

export default function HistoryPage() {
  return (
    <Container>
      <ContentWrap>
        <TitleContainer>
          <Title>Past Readings</Title>
          <Month>July</Month>
        </TitleContainer>
      </ContentWrap>
    </Container>
  );
};

const Container = styled.div`
  height: 100vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #fce6c5;
`;
const ContentWrap = styled.div`
  width: 90%;
  gap: 2vw;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1vh;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-family: Bagnard;
  --s: 5px;
  padding: var(--s);
  border: calc(5*var(--s)) solid #0000 ;
  outline: 1px solid #000;
  outline-offset: calc(-3*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
`;
const Month = styled.h2`
  text-align: center;
  font-size: 2vw;
  font-family: Bagnard;
`;
