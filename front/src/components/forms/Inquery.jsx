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
  width: 200px;
  background: none;
  border: none
  text-align: center;
  color: #e1c4ca;
  font-size: 3rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  transform: translateY(-6vw);
  cursor: pointer;
  transition: all 0.3s linear;
  &: hover {
    border: 2px solid #e1c4ca;
    background: rgba(65,50,63,0.9);
  }
  @media only screen and (max-width: 500px) {
    width: 20vw;
    font-size: 1rem;
    transform: translateY(-10vw)
  }
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    font-size: 1.5rem;
    width: 20vw;
  }
`;
const Query = styled.input`
  width: 70vw;
  height: 20vw;
  border: none;
  max-height: 400px;
  max-width: 700px;
  background: rgb(0,0,0,0.4);
  text-align: center;
  color: #e1c4ca;
  font-size: 2rem;
  font-family: 'Amatic SC';
  font-weight: bold;
  &::placeholder {
    color: white;
  }
  @media only screen and (max-width: 700px) {
    font-size: 1.3rem;
    width: 95vw;
    height: 25vh;
  }
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    font-size: 2rem;
    width: 95vw;
    height: 25vh;
  }
`;

export default Inquery;
