import { Page } from 'openai/pagination.mjs';
import React from 'react';
import styled from 'styled-components';

export default function HistoryPage() {
  return (
    <Container>
      <ContentWrap>
        <PageTitle>Past Readings</PageTitle>
        <div>
          HistoryPage
        </div>
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
  padding-top: 5vh;
`;
const PageTitle = styled.h1`
  font-size: 2rem;
  font-family: Bagnard;

`
