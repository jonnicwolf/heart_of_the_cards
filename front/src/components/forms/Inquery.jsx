import React from 'react';
import styled from 'styled-components';

const Inquery = ({ questionSetter, runFetchSetter }) => {
  const handleChange = (e) => questionSetter(e.target.value);

  function handleSubmit (e) {
    e.preventDefault();
    runFetchSetter(true);
  };

  return (
    <Container>
      <Query onChange={handleChange} placeholder='What question burns brightest within your heart?'/>
      <Button onClick={handleSubmit}>submit</Button>
    </Container>
  );
};

const Container = styled.div`
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
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;
const Query = styled.input`
  width: 70vw;
  border: 10px groove #699897;
  height: 20vw;
  max-height: 400px;
  max-width: 700px;
  background: rgb(0,0,0,0.4);
  text-align: center;
  color: #e1c4ca;
  font-size: 4vw;
  font-family: 'Amatic SC';
  font-weight: bold;
  outline: none;  
  &::placeholder {
    color: white;
  }
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export default Inquery;
