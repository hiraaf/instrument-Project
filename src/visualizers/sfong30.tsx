// Resources Consulted: https://www.youtube.com/watch?v=0YvPgYDR1oM

// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

var start = 0;

export const RingVisualizer = new Visualizer(
    'Ring Visualizer',
    (p5: P5, analyzer: Tone.Analyser) => {
      const width = window.innerWidth;
      const height = window.innerHeight / 2;
      const dim = Math.min(width, height);
  
      p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    //p5.stroke(255, 255, 255, 255);
    p5.translate(width/2, height/2);
    p5.noFill();

    const values = analyzer.getValue();
    p5.beginShape();

    var space = 1;

    for (let i = 0; i < 200; i+= space) {
      const amplitude = values[i] as number;

      var xoff = p5.map(p5.cos(i), 0, 1, 0, amplitude);
      var yoff = p5.map(p5.sin(i), 0, 1, 0, amplitude);

      // noise value
      var noise = p5.noise(xoff + start, yoff + start) * 5;

      // rectangle height
      var h = p5.map(noise, 0, 1, 0, 250) * amplitude;

      // variables for colors
      var r = p5.map(p5.sin(i), -1, 1, 50, 255);
      var g = p5.map(h, -1, 1, 105, 255);
      var b = p5.map(noise, -1, 1, 180, 255);
      
      p5.stroke(r, g, b);

      // create circle shape
      p5.rotate(space);

      // draw rectangle
      p5.rect(150, 1, h, 1);  
    }

    start += 0.05;

    p5.endShape();
  },
);