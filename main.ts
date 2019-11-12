function log(message) {
  console.log(message);

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally: " + i);

  let count = 5; // Class cohesion
  class PointClass {
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
  count = "a";

  console.log(count);
}

var message = "Hello World";

log(message);

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any = [1, true, "a", false];

enum Color {
  Red, //=0
  Green, //=1
  Blue //=2
}

let backgroundColor = Color.Blue;

console.log(backgroundColor);

let aString;
aString = "helloc";
// type assertion
let endsWidthC = (<string>aString).endsWith("c");
let endsWidthD = (aString as string).endsWith("d");

console.log(endsWidthC, endsWidthD);

// define function
let daLog = function(message) {
  console.log(message);
};
daLog("test");

// arrow function
let doLog = (message1, message2) => console.log(message1, message2);
doLog("Test1", "Test2");

// passing defined object parameters
// to avoid repetition use interface
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point /* { x: number; y: number } */) => {
  console.log(point);
};
drawPoint({ x: 1, y: 2 });

import { PointClass } from "./point";

let point = new PointClass(1, 2);
point.x = 100;
let x = point.x;
console.log(x);
point.draw();
