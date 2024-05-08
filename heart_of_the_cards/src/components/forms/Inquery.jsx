import React, { useState } from 'react';
import {
  useQuery,
} from '@tanstack/react-query';
import styled from 'styled-components';

const Inquery = ({ cardSetter }) => {
  const [question, setQuestion] = useState('');

  function handleChange (e) {
    setQuestion(e.target.value)
  };

  const getCards = async () => {
    try {
      const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=3');
      return response.json();
    } catch (error) { throw new Error('getCard error: ', error) };
  };

  const cards = useQuery({ queryKey: ['cards'], queryFn: getCards});

  function handleSubmit (e) {
    e.preventDefault();
    cardSetter(cards.data);
  }

  return (
    <Form action={handleSubmit}>
      <Query onChange={handleChange} placeholder='What question burns brightest within your heart?'/>
      <Button type='submit'>submit</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  width: 15vw;
  border: 5px solid #e1c4ca;
  border-radius: 10px 30px;
  padding: 1vw;
  background: #a57fa0;
  text-align: center;
  color: #e1c4ca;
  font-size: 3vw;
  font-family: 'Amatic SC';
  font-weight: bold;
  transform: translateY(-4vw);
  cursor: pointer;
`;
const Query = styled.input`
  width: 70vw;
  border-radius: -30px;
  height: 20vw;
  background-color : #a57fa0;
  text-align: center;
  color: #e1c4ca;
  font-size: 4vw;
  font-family: 'Amatic SC';
  font-weight: bold;
  outline: none;
`;

export default Inquery;

