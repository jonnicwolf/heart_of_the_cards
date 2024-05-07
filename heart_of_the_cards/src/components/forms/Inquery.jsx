import React from 'react';
import styled from 'styled-components';

const Inquery = () => {
  return (
    <>
    <Query placeholder='What question burns brightest within your heart?'/>
    
    </>
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
  }
`;

export default Inquery;
