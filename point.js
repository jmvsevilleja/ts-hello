"use strict";
exports.__esModule = true;
// Class cohesion
var PointClass = /** @class */ (function () {
    //members
    // private x: number;
    // y: number;
    //?= optional
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
exports.PointClass = PointClass;
