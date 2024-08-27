import React from 'react';
import styled from 'styled-components';
import { Canvas, } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';

export default function Forest () {
  return (
    <Container>
      {/* <Canvas camera={{ near: 1, far: 5_000 }}> */}
      <Canvas>
        <Light position={[50, 4, -6]} color='#a6e391'/>
        
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
      scale={1.7}
      position={[0, -165, -550]}
      rotation={[-0.3, -1.60, -0.3]}
    />
  );
};

function Light({position, color}) {
  return (
    <directionalLight
      position={position}
      intensity={1}
      color={color}
    />
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  // background: #12043b;
  // background: #73ddfa;
  // background-image: url('https://plus.unsplash.com/premium_vector-1697729804286-7dd6c1a04597?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  // background-image: url('https://cdn.pixabay.com/photo/2016/03/31/21/12/blue-1296253_1280.png');
`;
