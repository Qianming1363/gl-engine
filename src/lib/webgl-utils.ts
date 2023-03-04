class WebGLUtils {
  static setupWebGL(canvas: HTMLCanvasElement, opt_attribs?: any, opt_onError?: any) {
      var context = WebGLUtils.create3DContext(canvas, opt_attribs);
      if (!context) {
        if (!window.WebGLRenderingContext) {
          opt_onError && opt_onError("");
        } else {
          opt_onError && opt_onError("");
        }
      }
      return context;
  }
  static create3DContext (canvas: HTMLCanvasElement, opt_attribs?: any) {
    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    var context: any = null;
    for (var ii = 0; ii < names.length; ++ii) {
      try {
        context = canvas.getContext(names[ii], opt_attribs);
      } catch(e) {}
      if (context) {
        break;
      }
    }
    return context;
  }

}

export {WebGLUtils}