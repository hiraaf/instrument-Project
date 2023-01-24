// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const PjaimeVisualizer = new Visualizer(
  'Drum Pad',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
  

    p5.background(10,15,20);
    p5.translate(width / 2.5, height / 4);
    
    const values = analyzer.getValue();
    p5.beginShape();

    for (let i = 0; i < 90; i++) {
      const amplitude = values[i] as number;
        p5.rotate(Math.sin(p5.frameCount/1000 + i )*5)

      const x = p5.map(amplitude*2, 1, 2, 90, 350) * p5.sin(i*4);
      const y = p5.map(amplitude*2, -2, 2, 90, 250) * p5.cos(i*4);
      p5.vertex(x, y);
    
  
      //colors
      var m = p5.map(Math.sin(p5.frameCount),-1,1,50,5)
      var k = p5.map(Math.sin(p5.frameCount/2),-1,1,50,150)
      var u = p5.map(Math.sin(p5.frameCount/4), -1,1,50,250) 
      p5.stroke (m,k,u)
      p5.fill( m,u);

    }
    p5.endShape();

    },
  );