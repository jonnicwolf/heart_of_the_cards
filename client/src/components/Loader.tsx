import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Container>
      <Dot delay="0s" />
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
    </Container>
  );
};

const pulse = keyframes`
  0% {
    opacity: 0.2;
    transform: translateY(0px);
  }

  50% {
    opacity: 1;
    transform: translateY(-6px);
  }

  100% {
    opacity: 0.2;
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Dot = styled.div<{ delay: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #b57902;

  animation: ${pulse} 1s infinite;
  animation-delay: ${({ delay }) => delay};
`;

export default Loader;
