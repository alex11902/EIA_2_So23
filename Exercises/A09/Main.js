"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_Asteroids.crc2 = canvas.getContext("2d");
        A09_Asteroids.crc2.fillStyle = "black";
        A09_Asteroids.crc2.strokeStyle = "white";
        A09_Asteroids.crc2.fillRect(0, 0, canvas.width, canvas.height);
        A09_Asteroids.createPaths();
        console.log("Asteroids paths:", A09_Asteroids.asteroidPaths);
        createAsteroids(5);
        //createShip();
        // window.addEventListener("mousedown",loadLaser);
        window.addEventListener("mouseup", shootLaser);
        //window.addEventListener("keypress",handleKeypress);
        //window.addEventListener("mousemove",setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("shoot Laser");
        let hotspot = new A09_Asteroids.Vector(_event.clientX - A09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - A09_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    // wenn asteroid größer als 0.3, dann 2 kleinere Asteroiden
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new A09_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velosity.add(_asteroid.velosity);
                asteroids.push(fragment);
            }
        }
        // Methode sucht getroffenen Asteroid aus Array
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index = 1);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new A09_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("update");
        A09_Asteroids.crc2.fillRect(0, 0, A09_Asteroids.crc2.canvas.width, A09_Asteroids.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        //ship.draw();
        //handleCollisions();
    }
})(A09_Asteroids || (A09_Asteroids = {}));
;
//# sourceMappingURL=Main.js.map