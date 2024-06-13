import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Logout_Btn() {
  return (
    <StyledLink to='/login'>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg> Log Out
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
