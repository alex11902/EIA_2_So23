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
            // Farben für den Fallschirmflieger festlegen
            const parachuteColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const bodyColor = "#FFFF00"; // Gelb
            // Größe des Fallschirmflieger festlegen
            const paragliderWidth = 40;
            const paragliderHeight = 40;
            LuftfahrtClasses.crc2.save();
            // Fallschirm zeichnen
            LuftfahrtClasses.crc2.fillStyle = parachuteColor;
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.arc(this.position.x, this.position.y, paragliderWidth / 2, 0, Math.PI * 2);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fill();
            // Körper zeichnen
            LuftfahrtClasses.crc2.fillStyle = bodyColor;
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(this.position.x, this.position.y - paragliderHeight / 2);
            LuftfahrtClasses.crc2.lineTo(this.position.x - paragliderWidth / 2, this.position.y + paragliderHeight / 2);
            LuftfahrtClasses.crc2.lineTo(this.position.x + paragliderWidth / 2, this.position.y + paragliderHeight / 2);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.restore();
        }
    }
    LuftfahrtClasses.Paraglider = Paraglider;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Paraglider.js.map