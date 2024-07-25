import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function GetStartedCard({ setter }) {
  const navigate = useNavigate();
  function handleClick () {
    setter(false);
    navigate('/');
  }
  return (
    <Container>
      <Title>Get Started</Title>

      <Message>
        Ready to embark on your tarot journey? Click the button below to start your adventure with Esperi.
      </Message>

      <Button onClick={handleClick}>Lets Go!</Button>
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
  gap: 10px;
  font-family: Bagnard;
`;
const Title = styled.h1`
  font-family: Bagnard;
  font-size: 3rem;
  text-decoration: underline;
  text-align: center;
  @media only screen and (max-width: 720px) {
    font-size: 2rem;
  }
`;
const Message = styled.p`
  font-family: Bagnard;
  text-align: center;
  font-size: 1.5rem;
  padding: 30px;
  @media only screen and (max-width: 720px) {
    font-size: 1rem;
  }
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
  transform: translateY(-20px);

  &: hover {
    border: 2px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
    color: white;
    transition: all 0.3s linear;
  }
  @media only screen and (max-width: 500px) {
    width: 20vw;
    font-size: 1rem;
  }
  @media only screen and (min-width: 701px) and (max-width: 1300px) {
    font-size: 1.5rem;
    width: 20vw;
  }
`;
