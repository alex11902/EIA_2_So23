"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Paraglider {
        position;
        velosity;
        size;
        constructor(_size) {
            console.log("Paraglider constructor");
        }
        move(_timeslice) {
            console.log("Paraglider move");
        }
        draw() {
            console.log("Paraglider draw");
        }
    }
    LuftfahrtClasses.Paraglider = Paraglider;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Paraglider.js.map