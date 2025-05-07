import React, { FC, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import p5 from 'p5';

interface Props {
  name_short: string
}

const Card: FC<Props> = ({ name_short }) => {
  const sketch_ref = useRef();

  // @ts-ignore
  const sketch = useCallback ((p) => {
    let angle: number = 0;
    let img: string;

    p.preload = () =>  { img = p.loadImage(`/tarot_cards/${name_short}.jpg`) };
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
      {/* @ts-ignore */}
      <div ref={sketch_ref} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 6px solid white;
  border-radius: 10px;
`;

export default Card;
