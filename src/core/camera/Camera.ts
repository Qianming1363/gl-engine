
import { Mat4 } from 'cuon-matrix-ts';
import { Vec3 } from 'cuon-matrix-ts';

class Camera {


  private fov: number;
  private aspect: number;
  private near: number;
  private far: number;

  private projectionMatrix: Mat4 = new Mat4();      // 投影矩阵

  private viewMaterix: Mat4 = new Mat4();           // view矩阵

  private pos: Vec3 = new Vec3();                   // 相机位置


  constructor (fov: number, aspect: number, near: number, far: number) {
    this.fov = fov
    this.aspect = aspect
    this.near = near
    this.far = far
    this.updateProjectionMatrix()
  }


  updateProjectionMatrix() {
    this.projectionMatrix = new Mat4()
    this.projectionMatrix.setPerspective(this.fov, this.aspect, this.near, this.far)
  }


  setFov() {

  }

  setAspect() {

  }


  setNear() {

  }

  setFar() {

  }


}