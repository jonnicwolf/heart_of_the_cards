import React, { useEffect, useRef, useCallback } from 'react';
import p5 from 'p5'

const Eye = ({ width, height }) => {
  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    let angleA = 0;
    let angleB = 0;
    let angleC= 0;
    let reverse = 0;

    p.setup = () => p.createCanvas(width, height, p.WEBGL);

    p.draw = () => {
      p.push();
      p.fill('#f7ebed');
      p.ellipse(0, 0, (p.width/12)*9, p.height, 4); // Diamond

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
      
      p.strokeWeight(2);

      p.push()
      p.noLoop()
      let delay = p.floor(p.random(2, 10));
      let lid_w = (p.width/12)*9;
      p.noFill()

      function run_blink () {
        for (let i = 9; i >= 0; i--) {
          console.log((p.width/12)*i, lid_w)
          p.noFill*
          setTimeout(()=>p.ellipse(0, 0, (p.width/12)*i, p.height, 4),500)
        }
        for (let i = 1; i <= 9; i++) {
          console.log((p.width/12)*i)
          p.noFill()
          setTimeout(()=>p.ellipse(0, 0, (p.width/12)*i, p.height, 4),500)
        }
      }
      setTimeout(run_blink, delay*1000)

      p.pop()

    };
  });

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return <div ref={sketch_ref} />;
};

export default Eye;
