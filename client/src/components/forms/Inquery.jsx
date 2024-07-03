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
  justify-content: center;
`;
const Button = styled.button`
  width: 200px;
  background: none;
  border: none
  text-align: center;
  color: #e1c4ca;
  font-size: 3rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  transform: translateY(-80px);
  cursor: pointer;
  transition: all 0.3s linear;
  &: hover {
    border: 2px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
    color: white;
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
const Query = styled.input`
  width: 70vw;
  height: 30vh;
  border: none;
  border-radius: 30px;
  max-height: 400px;
  background: rgb(0,0,0,0.6);
  text-align: center;
  color: #e1c4ca;
  font-size: 3rem;
  font-family: 'Lora';
  font-weight: bold;
  transition: all 0.3s linear;
  &::placeholder {
    color: white;
  }
  &:focus::placeholder {
    color: transparent;
    text-wrap: pretty;
  }
  @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
    width: 95vw;
    height: 25vh;
  }
  @media only screen and (min-width: 701px) and (max-width: 1300px) {
    font-size: 2rem;
    width: 95vw;
    height: 25vh;
  }
`;

export default Inquery;
