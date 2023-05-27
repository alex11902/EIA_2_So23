"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Asteroid {
        position;
        velosity;
        type;
        size;
        constructor(_size) {
            console.log("Asteroid constructor");
        }
        move(_timeslice) {
            console.log("Asteroid move");
        }
        draw() {
            console.log("Asteroid draw");
        }
    }
    A09_Asteroids.Asteroid = Asteroid;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map