"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_Asteroids.crc2 = canvas.getContext("2D");
        //crc2.fillStyle = "black";
        //crc2.strokeStyle = "white";
        A09_Asteroids.createPaths();
        console.log("Asteroids paths:", A09_Asteroids.asteroidPaths);
        let asteroid = new A09_Asteroids.Asteroid(1);
        console.log(asteroid);
    }
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Main.js.map