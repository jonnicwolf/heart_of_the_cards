import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import p5 from 'p5';

const Card = ({ name_short }) => {
  const sketch_ref = useRef();

  const sketch = useCallback ((p) => {
    let angle = 0;
    let img;

    p.preload = () =>  { img = p.loadImage(`https://sacred-texts.com/tarot/pkt/img/${name_short}.jpg`) };
    p.setup = () => { p.createCanvas(240, 400, p.WEBGL) };

    p.draw = () => {
      p.rotateY(angle);
      p.texture(img);
      p.push();
      p.translate(0, 0, 0.1);
      p.noStroke();
      p.plane(240, 400);
      p.pop();
    };
  });

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <Wrapper>
      <div ref={sketch_ref} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 6px solid white;
  border-radius: 10px;
`;

export default Card;
