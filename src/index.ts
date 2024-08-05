import {canvasSketch} from 'canvas-sketch'
import sketch from './sketches/example.ts'


// Sketch parameters
const settings = {
    dimensions: 'a4',
    pixelsPerInch: 300,
    units: 'in'
  };

// Start the sketch
canvasSketch(sketch, settings);



