import { DefaultCanvasSketchSettings, Sketch } from "../types/canvas-sketch/core/SketchManager";



// Artwork function
const sketch = () => {
  const art: Sketch<DefaultCanvasSketchSettings> = ({ context, width, height }) => {
    // Margin in inches
    const margin = 1 / 4;

    // Off-white background
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    // Gradient foreground
    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, 'red');
    fill.addColorStop(1, 'orange');

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);

  };

  return art
};


export default sketch;

