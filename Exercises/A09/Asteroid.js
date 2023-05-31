"use strict";
var A09_Asteroids;
(function (A09_Asteroids) {
    class Asteroid {
        position;
        velosity;
        type;
        size;
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new A09_Asteroids.Vector(0, 0);
            this.velosity = new A09_Asteroids.Vector(0, 0);
            //min, max lenght festlegen 
            this.velosity.random(100, 200);
            //Math.floor schneidet nachkommastellen weg
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            // console.log("Asteroid move");
            //Verschiebung
            let offset = new A09_Asteroids.Vector(this.velosity.x, this.velosity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // wenn position canvas verlässt
            if (this.position.x < 0)
                //addend
                this.position.x += A09_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                //addend
                this.position.y += A09_Asteroids.crc2.canvas.height;
            if (this.position.x > A09_Asteroids.crc2.canvas.width)
                //addend
                this.position.x -= A09_Asteroids.crc2.canvas.width;
            if (this.position.y > A09_Asteroids.crc2.canvas.height)
                //addend
                this.position.y -= A09_Asteroids.crc2.canvas.height;
        }
        draw() {
            // console.log("Asteroid draw");
            A09_Asteroids.crc2.save();
            A09_Asteroids.crc2.translate(this.position.x, this.position.y);
            A09_Asteroids.crc2.scale(this.size, this.size);
            A09_Asteroids.crc2.translate(-50, -50);
            A09_Asteroids.crc2.stroke(A09_Asteroids.asteroidPaths[this.type]);
            A09_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new A09_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            // absolut position
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    A09_Asteroids.Asteroid = Asteroid;
})(A09_Asteroids || (A09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map