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
        <Light position={[5, 4, -6]} color='#a6e391'/>
        <Light position={[10, 15, -6]} color='#e3e391'/>
        <Model />
        <ambientLight intensity={2} />
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

function Light({position, color}) {
  return (
    <directionalLight
      position={position}
      intensity={10.5}
      color={color}
    />
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  // background: #12043b;
  background: #73ddfa;
`;
