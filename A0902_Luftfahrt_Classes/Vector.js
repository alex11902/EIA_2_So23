"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
    }
    LuftfahrtClasses.Vector = Vector;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Vector.js.map