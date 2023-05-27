"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, y) {
            this.x = _x;
            this.y = y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y -= _addend.y;
        }
    }
    A09_Asteroids.Vector = Vector;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Vector.js.map