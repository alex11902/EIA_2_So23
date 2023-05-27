"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class HotAirBalloon {
        position;
        velosity;
        size;
        constructor(_size) {
            console.log("Balloon constructor");
        }
        move(_timeslice) {
            console.log("Balloon move");
        }
        draw() {
            console.log("Balloon draw");
        }
    }
    LuftfahrtClasses.HotAirBalloon = HotAirBalloon;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=HotAirBalloon.js.map