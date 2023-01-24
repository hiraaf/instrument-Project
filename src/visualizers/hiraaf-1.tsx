import P5 from 'p5';
import * as Tone from 'tone';

import { Visualizer } from '../Visualizers';

export const FlowerWaveformVisualizer = new Visualizer(
    'Flower Waveform',
    (p5: P5, analyzer: Tone.Analyser) => {
      const width = window.innerWidth;
      const height = window.innerHeight / 2;
      
      p5.background(0, 0, 0, 210); 
      p5.stroke('rgb(139,0,0)');
      p5.strokeWeight(2) 
      p5.noFill(); 
      p5.frameRate(30);
      p5.translate(580, 200);
      const values = analyzer.getValue(); 

      p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amp = values[i] as number
        p5.ellipse(0, 30, 20 + height * amp, 80 + width * amp);
        p5.rotate(p5.PI/5)
      }
    p5.endShape();

    },
  );