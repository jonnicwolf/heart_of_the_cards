import React, { FC, useEffect, useRef, useCallback } from 'react';
// @ts-ignore
import p5 from 'p5';

interface Props {
  width: number,
  height: number,
  tracksMouse: boolean | undefined
}

const Eye: FC<Props> = ({ width, height, tracksMouse }) => {
  const sketch_ref = useRef();

  // @ts-ignore
  const sketch = useCallback((p) => {
    let angleA = 0;
    let angleB = 0;
    let angleC = 0;
    let reverse = 0;
    const lid_w = width / 12;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
    };

    p.draw = () => {
      const irisX = p.map(tracksMouse ? p.mouseX : 50, 0, width, (width / 60)*-1, p.width / 60);
      const irisY = p.map(tracksMouse ? p.mouseY : 60, 0, height, (width / 24)*-1, p.height / 36);
      p.background(0, 0.1);

      p.push();
      p.noStroke();
      p.fill('black');
      p.pop();

      p.push();
      p.fill('gold');
      p.translate(0, 2);
      p.circle(0, 0, 100);
      p.fill('black');
      p.circle(0, 0, 90);
      p.fill('gold');
      p.circle(0, 0, (width/12)*2);
      p.pop();

      p.push();
      p.pop();

      angleA += 0.1;
      angleB -= 0.1;
      angleC += 0.1;
      reverse -= 0.01;

      p.strokeWeight(1);
    };
  });

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  // @ts-ignore
  return <div ref={sketch_ref} />;
};

export default Eye;
