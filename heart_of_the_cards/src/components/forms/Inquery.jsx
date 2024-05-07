import React from 'react';
import styled from 'styled-components';

const Inquery = () => {
  return (
    <Query />
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
  font-size: 3vw;
`;

export default Inquery;
