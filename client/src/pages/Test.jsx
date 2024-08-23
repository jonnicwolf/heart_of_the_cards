import React from 'react'
import styled from 'styled-components';

import Modal from '../components/modals/Modal';

const Test = () => {
  return (
    <Container>
      <Modal />
    </Container>
  )
}

export default Test;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;