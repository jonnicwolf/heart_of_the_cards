import React, { useEffect, useRef, useCallback } from 'react';
import p5 from 'p5';

const Eye = ({ width, height }) => {
  const sketch_ref = useRef();

  let lid_w = width / 12;
  let blink_frames = [];

  function create_blink_frames () {
    for (let i = 0; i <= 3; i+=1) blink_frames.push(Math.floor(lid_w * i));
  };

  const sketch = useCallback((p) => {
    let angleA = 0;
    let angleB = 0;
    let angleC= 0;
    let reverse = 0;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      create_blink_frames();
    };

    p.draw = () => {
      p.background(0)
      let frameCount = p.frameCount > blink_frames/length - 1 ? 0 : p.frameCount;
      let frame = blink_frames[frameCount];
      
      const irisX = p.map(p.mouseX, 0, p.width, (p.width / 36)*-1, p.width / 36);
      const irisY = p.map(p.mouseY, 0, p.height, (p.width / 12)*-1, p.height / 24);
      
      p.push();
      p.noStroke();
      p.fill('black')
      p.ellipse(0,0, frame, height, 4);
      p.pop();

      p.push();
      //p.rotateZ(reverse);
      p.fill('#b25385');
      p.ellipse(irisX, irisY, (p.width/12)*8, (p.width/12)*8, 6); // Hexagon
      p.fill('#699897');
      p.circle(irisX, irisY, (p.width/12)*6);
      p.fill('gold');
      p.circle(irisX, irisY, (p.width/12)*2);
      p.pop();

      // Eyelashes
      p.push();
      p.strokeWeight(6);
      p.line(-36, 0, -50, 0);
      p.line(-35, -15, -50, -20);
      p.line(-35, 15, -50, 20);
      p.pop();

      p.push();
      p.translate(irisX, irisY);
      // Moving Triangle 1
      p.push();
      p.noFill();
      p.rotateZ(angleA);
      p.stroke('white');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      // Moving Triangle 2
      p.push();
      p.noFill();
      p.rotateZ(angleB);
      p.rotateY(angleB);
      p.stroke('#db8aae');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      // Moving Triangle 3
      p.push();
      p.noFill();
      p.rotateZ(angleC);
      p.rotateX(angleC);
      p.stroke('#db8aae');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.strokeWeight(2);
      p.pop();

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

  return <div ref={sketch_ref} />;
};

export default Eye;
