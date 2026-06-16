import react, { FC, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  setter: Dispatch<SetStateAction<string>>;
};

const QuestionBoard: FC<Props> = ({
  setter
}) => {
  
  // @ts-ignore
  const questionHandler = (e) => {
    e.preventDefault()
    setter(e.target.value);
  };

  return (
    <>
      <>
        <Title>
          S<Sm>EEK</Sm> Y<Sm>OUR</Sm> T<Sm>RUTH</Sm>
        </Title>
        <SpikeWrapper>
          <LeftSpike />
          <RightSpike />
        </SpikeWrapper>
      </>

      <div style={{textAlign: 'center'}}>
        <Question>What weighs upon your mind?</Question>
        <Textarea
          placeholder='Ask the cards your question...'
          autoCapitalize='sentences'
          onChange={questionHandler}
         />
      </div>
    </>
  );
};

const SpikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 118px;
  // gap: 10vh;
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
const Title = styled.div`
  font-family: 'Lora';
  color: white;
  font-size: 6rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const Sm = styled.span`
  display: inline-block;
  font-size: 2rem;
`;
const Question = styled.p`
  font-family: Elsie Swash Caps;
  color: #b57902;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Textarea = styled.textarea`
  background: rgba(255,255,255,0.1);
  height: 200px;
  width: 800px;
  font-family: fangson;
  padding: 15px;
  font-size: 1.5rem;
  color: white;
  outline: none;
  border-radius: 15px;
  &:focus {
    border: 2px solid #b57902;
    background: rgba(66, 66, 66, 0.9);
    color: white;
    transition: all 0.3s linear;
  }

  @media (max-width: 768px) {
    height: 30vh;
    width: 90vw;
  }
`;

export default QuestionBoard;
