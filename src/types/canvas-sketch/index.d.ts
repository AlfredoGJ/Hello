

declare module 'canvas-sketch' {

  import SketchManager, {
    CreateSketch,
    CanvasSketchSettings,
    DefaultCanvasSketchSettings,
  } from "./core/SketchManager";
  import { PaperSizes } from "./paper-sizes";

  declare const canvasSketch: CanvasSketch;

  declare interface CanvasSketch {
    <Settings extends CanvasSketchSettings>(
      sketch: CreateSketch<Settings>,
      settings: Settings
    ): Promise<SketchManager<Settings>>;
    (sketch: CreateSketch<DefaultCanvasSketchSettings>): Promise<
      SketchManager<DefaultCanvasSketchSettings>
    >;
    canvasSketch: CanvasSketch;
    PaperSizes: PaperSizes;

  }
}

