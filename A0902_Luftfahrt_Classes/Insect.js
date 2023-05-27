"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Insect {
        position;
        velosity;
        size;
        constructor(_size) {
            console.log("Insect constructor");
            this.position = new LuftfahrtClasses.Vector(0, 0);
            this.velosity = new LuftfahrtClasses.Vector(0, 0);
            this.velosity.random(100, 200);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Insect move");
            let offset;
        }
        draw() {
            console.log("Insect draw");
            // Körper
            let radius = 3;
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.fillStyle = "red";
            LuftfahrtClasses.crc2.arc(this._position.x, this._position.y, radius, 0, Math.PI * 2);
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
            // Beine
            LuftfahrtClasses.crc2.save();
            LuftfahrtClasses.crc2.translate(this._position.x, this._position.y);
            LuftfahrtClasses.crc2.scale(this.size, this.size);
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.strokeStyle = "black";
            LuftfahrtClasses.crc2.moveTo(this._position.x, this._position.y + 1);
            LuftfahrtClasses.crc2.lineTo(this._position.x + 3, this._position.y + 7);
            LuftfahrtClasses.crc2.moveTo(this._position.x, this._position.y);
            LuftfahrtClasses.crc2.lineTo(this._position.x - 3, this._position.y + 7);
            LuftfahrtClasses.crc2.moveTo(this._position.x, this._position.y);
            LuftfahrtClasses.crc2.lineTo(this._position.x + 1, this._position.y + 2);
            LuftfahrtClasses.crc2.moveTo(this._position.x, this._position.y);
            LuftfahrtClasses.crc2.lineTo(this._position.x - 1.5, this._position.y + 2);
            LuftfahrtClasses.crc2.stroke();
            LuftfahrtClasses.crc2.restore();
        }
        ;
    }
    LuftfahrtClasses.Insect = Insect;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Insect.js.map