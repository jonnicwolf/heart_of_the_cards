import React, {FC, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
//@ts-ignore
import p5 from 'p5';

interface Props {
  width: number,
  height: number
};
const Starfield: FC<Props> = ({width, height}) => {
  const sketch_ref = useRef();

  //@ts-ignore
   const sketch = useCallback((p: p5) => {
    let stars: {
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      phase: number;
    }[] = [];

    p.setup = () => {
      p.createCanvas(width,height);
      p.noStroke();

      stars = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * p.width,
        y: Math.random() * p.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    p.draw = () => {
      p.clear();

      stars.forEach((star) => {
        // pulse animation equivalent
        const pulse =
          (Math.sin(p.frameCount * star.speed + star.phase) + 1) / 2;

        const alpha = star.opacity * 255 * (0.4 + pulse * 0.6);

        p.fill(255, alpha);
        // p.fill('red', alpha);

        p.circle(
          star.x,
          star.y,
          star.size + pulse * 1.5
        );
      });
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  }, []);

    
  useEffect(() => {
    const p5canvas = new p5(sketch, sketch_ref.current);
    return () => p5canvas.remove()
  }, [sketch]);

  return (
    <Container>
      {/* @ts-ignore */}
      <div ref={sketch_ref} />
    </Container>
)
};

export default Starfield;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  // background-color: red;
`;
