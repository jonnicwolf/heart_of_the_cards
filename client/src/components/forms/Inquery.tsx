import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  questionSetter: (question: string) => void,
  runFetchSetter: (fetch: boolean) => void,
};

const Inquery: FC<Props> = ({ questionSetter, runFetchSetter }) => {

  function handleSubmit (e) {
    e.preventDefault();
    runFetchSetter(true);
  };

  return (
    <Container>
      <Query onChange={(e)=> questionSetter(e.target.value)} />
      <Button onClick={handleSubmit}>submit</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  border: 1px solid red;

  --s: 10px;
  padding: var(--s);
  border: calc(5*var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-3*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
  background-color: #fce6c5;

  @media only screen and (max-width: 720px) {
    width: 80%;
  }
`;
const Button = styled.button`
  width: 200px;
  background: none;
  text-align: center;
  font-size: 3rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  cursor: pointer;
  scale: 1.2;

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
export const Question = styled.p`
  font-size: 3rem;
  font-family: 'Lora';
  font-weight: bold;
  color: #4a4a4a;
  font-style: italic;
`;
const Query = styled.textarea`
  width: 100%;
  background-color: #fce6c5;
  text-align: center;
  font-size: 3rem;
  font-family: 'Lora';
  font-weight: bold;
  border: none;
  text-wrap: wrap;
  border: 1px solid rgba(0,0,0,0.3);
`;

export default Inquery;
