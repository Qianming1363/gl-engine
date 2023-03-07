
import { Mat4 } from 'cuon-matrix-ts';
import { Vec3 } from 'cuon-matrix-ts';

export class Camera {


  private fov: number;
  private aspect: number;
  private near: number;
  private far: number;

  private _projectionMatrix: Mat4 = new Mat4();      // 投影矩阵
  private _viewMaterix: Mat4 = new Mat4();           // view矩阵

  private pos: Vec3 = new Vec3();                   // 相机位置
  private target: Vec3 = new Vec3();
  private up: Vec3 = new Vec3();


  get projectionMatrix() {
    return this._projectionMatrix
  }

  get viewMaterix() {
    return this._viewMaterix
  }

  constructor (fov: number, aspect: number, near: number, far: number) {
    this.fov = fov
    this.aspect = aspect
    this.near = near
    this.far = far
    this.updateProjectionMatrix()
  }

  lookAt(target: Vec3, up?: Vec3) {
    // 上方向可以缺省
    this._viewMaterix = new Mat4().lookAt(this.pos.x, this.pos.y, this.pos.z, target.x ,target.y, target.z, up.x, up.y, up.z);

  }

  updateProjectionMatrix() {
    this._projectionMatrix = new Mat4().setPerspective(this.fov, this.aspect, this.near, this.far)
  }

  setPosition(x, y, z) {
    this.pos = new Vec3(x, y, z)
    this.lookAt(this.target, this.up)
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