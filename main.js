function log(message) {
    console.log(message);
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
    var count = 5;
    count = "a";
    console.log(count);
}
var message = "Hello World";
log(message);
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //=2
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
console.log(backgroundColor);
var aString;
aString = "helloc";
// type assertion
var endsWidthC = aString.endsWith("c");
var endsWidthD = aString.endsWith("d");
console.log(endsWidthC, endsWidthD);
// define function
var daLog = function (message) {
    console.log(message);
};
daLog("test");
// arrow function
var doLog = function (message1, message2) { return console.log(message1, message2); };
doLog("Test1", "Test2");
var drawPoint = function (point /* { x: number; y: number } */) {
    console.log(point);
};
drawPoint({ x: 1, y: 2 });
// Class cohesion
var PointClass = /** @class */ (function () {
    //members
    // private x: number;
    // y: number;
    //? = optional
    // _
    function PointClass(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // method, public by deafult
    PointClass.prototype.draw = function () {
        console.log(this._x, this._y);
    };
    Object.defineProperty(PointClass.prototype, "x", {
        // get property
        get: function () {
            return this._x;
        },
        // set property
        set: function (value) {
            if (value < 0)
                throw new error("value cannot be less than 0");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PointClass;
}());
var point = new PointClass(1, 2);
point.x = 100;
var x = point.x;
console.log(x);
point.draw();
