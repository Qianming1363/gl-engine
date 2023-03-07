
export class Scene {

  private _children: any = []

  constructor() {  }

  add(obj: any) {
    this._children.push(obj)
  }

  remove(obj: any) {
    const index = this._children.findIndex(e => e === obj)
    this._children.splice(index, 0, 1)
  }


}