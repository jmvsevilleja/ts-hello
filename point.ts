// Class cohesion
export class PointClass {
  //members
  // private x: number;
  // y: number;
  //?= optional
  constructor(private _x: number, public _y?: number) {}
  // method, public by deafult
  draw() {
    console.log(this._x, this._y);
  }
  // get property
  get x() {
    return this._x;
  }
  // set property
  set x(value) {
    if (value < 0) throw new error("value cannot be less than 0");

    this._x = value;
  }
}
