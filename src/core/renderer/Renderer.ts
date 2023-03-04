import { getWebGLContext } from "../../lib/cuon-utils";

class Renderer {


  private canvas: HTMLCanvasElement;  // canvas
  private gl: WebGLRenderingContext;  // gl

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.gl = getWebGLContext(canvas);
  }


  render(camera, scene: ) {

  }



}
