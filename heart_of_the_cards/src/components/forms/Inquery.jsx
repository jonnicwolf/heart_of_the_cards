import React, { useState } from 'react';
import {
  useQuery,
  useQueryClient
} from '@tanstack/react-query';
import styled from 'styled-components';

const Inquery = ({ cardSetter }) => {
  const [question, setQuestion] = useState('');

  function handleChange (e) {
    setQuery(e.target.value)
  };
  const getCards = async () => {
    try {
      const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=3')
      return response.json()
    } catch (error) { throw new Error('getCard error: ', error) }
  }

  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ['cards'], queryFn: getCards})

  return (
    <form action="">
      <Query placeholder='What question burns brightest within your heart?'/>
    </form>
  );
};



const Query = styled.input`
  width: 70vw;
  border: 15px groove #e1c4ca;
  border-radius: -30px;
  height: 20vw;
  background: #a57fa0;
  text-align: center;
  color: #e1c4ca;
  font-size: 4vw;
  font-family: 'Amatic SC';
  font-weight: bold;
  outline: none;
`;

export default Inquery;
