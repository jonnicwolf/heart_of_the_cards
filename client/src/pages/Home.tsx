import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

import Board from '../components/Board';
// @ts-ignore
import Modal from '../components/modals/Modal';
//import { useAuth } from '../components/contexts/AuthContext';
import Starfield from '../components/p5/Starfield';

const Home: FC = () => {
//   const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [curQuestion, setCurQuestion] = useState<string>('');
//   const {currentUser} = useAuth();

//   const full_name = currentUser.user_metadata.full_name;
//   const user = full_name.split(' ')[0];

  const questions = [
    "Welcome, seeker. The cards are waiting. What question rests on your heart today?",
    "The veil is thin, and the deck is ready. Ask your question, and let the cards reveal their wisdom.",
    "Hey, curious soul! Ready to peek at what the universe has in store? Ask away, and I’ll pull some cards for you.",
    "Sit, breathe, and focus your thoughts. The cards are listening. What would you like to know?"
  ];

  const findRandomQuestion = () => questions[Math.floor(Math.random() * questions.length)];

  useEffect(() => {
    setCurQuestion(findRandomQuestion());
  }, []);

  return (
    <Container>
      <WelcomeWrapper>
        <Divination>
          <LeftSpike />
          <span>Divination</span>
          <RightSpike/>
        </Divination>
        {/* <hr /> 
        <Question>{curQuestion}</Question> */}
      </WelcomeWrapper>

      {/* {modalIsOpen && !user
        ? <Modal setter={setModalIsOpen} />
        : <Board />} */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  gap: 10vh;
  align-items: center;
  height: 100%;
  width: 100vh;
  max-width: 2400px;
  align-self: center;
  // background-color: #000;

  @media only screen and (max-width: 375px) and (pointer: coarse) and (hover: none) {
    height: 90vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 375px) and (pointer: coarse) and (hover: none) {
    height: 93vh;
  }
  @media only screen and (min-width: 376px) and (max-width: 500px) and (pointer: coarse) and (hover: none) {
    height: 94vh;
  }
  @media only screen and (min-width: 501px) and (max-width: 770px) and (pointer: coarse) and (hover: none) {
    height: 92vh;
  }
  @media only screen and (min-width: 771px) and (max-width: 1000px) and (pointer: coarse) and (hover: none) {
    height: 93vh;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) and (pointer: coarse) and (hover: none) {
    height: 90vh;
  }
  @media only screen and (min-width: 750px) and (max-width: 1000px) {
    height: 92vh;
  }
  @media only screen and (min-width: 1001px) and (max-width: 1300px) {
    height: 92vh;
  }
`;
const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 1200px;
  
  width: 100%;
  z-index: 1;
`;
const LeftSpike = styled.div`
  height: 120px;
  width: 1px;
  border: 1px solid #b57902;
  background: linear-gradient(#b57902, #000);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  transform: rotate(270deg);
`;
const RightSpike = styled(LeftSpike)`
  transform: rotate(90deg);
`;
const Divination = styled.div`
  font-family: Lora;
  font-family: Bagnard;
  font-size: 2rem;
  display: flex;
  color: #b57902;
  align-items: center;
  justify-content: center;
  gap: 70px;
  opacity: .7;
  outline: 1px solid red;
`;
 const Question = styled.p`
  font-size: 2.5rem;
  font-family: 'Lora';
  font-weight: bold;
  color: #4a4a4a;
  font-style: italic;
  text-align: center;
`;

export default Home;
