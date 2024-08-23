import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
} from '@react-three/drei';

export default function Forest () {
  return (
    <Container>
      <Canvas>
        <Light />
        <Model />
        <OrbitControls />
      </Canvas>
    </Container>
  );
};

function Model () {
  const { scene } = useGLTF('/forest.glb');
  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -165, -550]}
      rotation={[-0.3, -1.60, -0.3]}
    />
  );
};

function Light() {
  return (
    <directionalLight
      position={[5, 4, -6]}
      intensity={1.5}
      color='#3490FF'
    />
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #12043b;
`;
