import React, { useEffect, useRef, useCallback } from 'react';
import p5 from 'p5'

const Eye = ({ width, height }) => {
  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    let angleA = 0;
    let angleB = 0;
    let angleC= 0;
    let reverse = 0;

    let lid_w = width / 12;
    let blink_frames = [];
    //let blink_delay = p.floor(p.random(2000, 10_000));
    let blink_delay = p.random(2000, 10_000);


    function create_blink_frames () {
      for (let i = 9; i > 0; i-=0.1) blink_frames.push(p.floor(lid_w * i)); // Close the eye
      console.log(blink_frames)
      //for (let i = 0; i < 9; i+=0.38) blink_frames.push(p.floor(lid_w * i)); // Reopen eye
      //console.log(blink_frames)
    };

    p.setup = () => {
      //p.createCanvas(width, height, p.WEBGL);
      p.createCanvas(width, height, p.WEBGL);
      create_blink_frames()
    };
    
    p.draw = () => {
      p.push();
      p.noFill();
      p.fill('black')
      let frameCount = p.frameCount > blink_frames/length - 1 ? 0 : p.frameCount;
      let frame = blink_frames[frameCount]
      p.ellipse(0, 0, blink_frames[frame], p.height, 4);
      p.pop();

      p.push();
      p.rotateZ(reverse);
      p.fill('#b25385');
      p.ellipse(0, 0, (p.width/12)*8, (p.width/12)*8, 6); // Hexagon
      p.fill('#699897');
      p.circle(0, 0, (p.width/12)*6);


      p.fill('gold');
      p.circle(0, 0, (p.width/12)*2);
      p.pop();

      // Eyelashes
      p.line(-40, 0, -50, 0);
      p.line(-35, -15, -50, -20);
      p.line(-35, 15, -50, 20);

      p.push();
      p.noFill();
      p.rotateZ(angleA);
      p.stroke('white');
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      p.push();
      p.noFill();
      p.rotateZ(angleB);
      p.rotateY(angleB);
      p.stroke('#db8aae');
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      p.push();
      p.noFill();
      p.rotateZ(angleC);
      p.rotateX(angleC);
      p.stroke('#db8aae')
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      angleA += 0.1;
      angleB -= 0.1;
      angleC += 0.1;
      reverse -= 0.01;
      
      p.push();
      p.fill('#f7ebed');
      p.fill('black')
      //p.noFill();
      p.ellipse(0, 0, blink_frames[frame], p.height, 4);
      p.pop();
      
      p.strokeWeight(2);
    };

  });

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return <div ref={sketch_ref} />;
};

export default Eye;
