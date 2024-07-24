import React from 'react';
import styled from 'styled-components';

export default function GetStartedCard() {
  return (
    <Container>
      <Title>Get Started</Title>
      <Message>
        Ready to embark on your tarot journey? Click the button below to start your adventure with Esperi.
      </Message>
      <Button>Lets Go!</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  gap: 40px;
  font-family: Bagnard;
`;
const Title = styled.h1`
  font-family: Bagnard;
  font-size: 3rem;
  text-align: center;
`;
const Message = styled.p`
  font-family: Bagnard;
  text-align: center;
  font-size: 1.5rem;
  padding: 30px;
`;
const Button = styled.button`
  width: 200px;
  background: none;
  border: none
  text-align: center;
  color: black;
  font-size: 3rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  cursor: pointer;
  &: hover {
    border: 2px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
    color: white;
    transition: all 0.3s linear;
  }
  @media only screen and (max-width: 500px) {
    width: 20vw;
    font-size: 1rem;
    transform: translateY(-40px)
  }
  @media only screen and (min-width: 701px) and (max-width: 1300px) {
    font-size: 1.5rem;
    width: 20vw;
  }
`;
