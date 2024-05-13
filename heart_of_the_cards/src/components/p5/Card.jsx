import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import p5 from 'p5';

const Card = ({ name_short }) => {
  const sketch_ref = useRef();

  const sketch = useCallback ((p) => {
    let angle = 0;
    let img;
    let mandalaImg;
    let pg;

    p.preload = () =>  {
      img = p.loadImage(`https://sacred-texts.com/tarot/pkt/img/${name_short}.jpg`);
      mandalaImg = p.loadImage('https://img.icons8.com/ios/50/mandala.png');
    };

    p.setup = () => {
      p.createCanvas(240, 400, p.WEBGL);
      pg = p.createGraphics(p.width, p.height);
      pg.background(255);
      drawPattern(pg);
    };

    p.draw = () => {
      p.rotateY(angle);

      p.push();
      p.translate(0, 0, -0.1);
      p.texture(pg);
      p.noStroke();
      p.plane(240, 400);
      p.pop();

      p.texture(img);
      p.push();
      p.translate(0, 0, 0.1);
      p.noStroke();
      p.plane(240, 400);
      p.pop();
    };

    function drawPattern(graphic) {
      let cols = 10;
      let rows = 10;
      let cellWidth = p.width / cols;
      let cellHeight = p.height / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * cellWidth;
          let y = j * cellHeight;
          graphic.image(mandalaImg, x, y, cellWidth, cellHeight);
        };
      };
    };

    p.mouseClicked = () => {
      let targetAngle = angle < p.PI ? p.PI : 0;
      let increment = angle < p.PI ? 0.05 : -0.05;
    
      let interval = setInterval(() => {
        if ((increment > 0 && angle >= targetAngle) || (increment < 0 && angle <= targetAngle)) {
          clearInterval(interval);
          angle = targetAngle;
        } else {
          angle += increment;
        };
      }, 1);
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
