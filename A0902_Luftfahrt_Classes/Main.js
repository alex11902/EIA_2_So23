"use strict";
/*
Aufgabe: <L09.2_Luftfahrt_Classes>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <21.05.2023>
Quellen: <insects and windsock inspired by Marie Eckl>
*/
// Handle-load function
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    /*    interface Vector{
         x: number;
         y: number;
     } */
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        LuftfahrtClasses.crc2 = canvas.getContext("2d");
        let horizon = LuftfahrtClasses.crc2.canvas.height * golden;
        console.log("horizon");
        canvas = document.querySelector("canvas");
        LuftfahrtClasses.crc2 = canvas.getContext("2d");
        backgroundgradient();
        drawSun({ x: 700, y: 70 });
        drawClouds({ x: 50, y: 125 }, { x: 150, y: 50 });
        drawClouds({ x: 300, y: 100 }, { x: 150, y: 50 });
        drawClouds({ x: 600, y: 125 }, { x: 150, y: 50 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTrees(horizon);
        drawKiosk({ x: 680, y: 360 });
        drawParaglider({ x: 180, y: 70 });
        drawParaglider({ x: 300, y: 180 });
        drawParaglider({ x: 400, y: 250 });
        drawLandingPlace({ x: 480, y: 400 });
        drawfrontMountain();
        drawWindsock({ x: 550, y: 390 });
        drawGrass(150);
        drawInsect({ x: 600, y: 400 });
        drawInsect({ x: 700, y: 450 });
        drawInsect({ x: 100, y: 400 });
        drawInsect({ x: 200, y: 470 });
        drawInsect({ x: 400, y: 450 });
        let insect = new LuftfahrtClasses.Insect(1);
        console.log(insect);
    }
    function backgroundgradient() {
        // Define linear Gradient
        let gradient = LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, LuftfahrtClasses.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue"); // lightblue
        gradient.addColorStop(golden, "HSL(291,2%,77%)"); // grey
        gradient.addColorStop(1, "HSL(100, 80%, 30%)"); // green
        // draw gradient
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fillRect(0, 0, LuftfahrtClasses.crc2.canvas.width, LuftfahrtClasses.crc2.canvas.height);
    }
    // Function sun
    function drawSun(_position) {
        console.log("sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = LuftfahrtClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%,90%,1)");
        gradient.addColorStop(1, "HSLA(60,100%,50%,0)");
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
    }
    // Draw Clouds
    function drawClouds(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = LuftfahrtClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0,100%,100%,0.5");
        gradient.addColorStop(1, "HSLA(0,100%,100%,0");
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            LuftfahrtClasses.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -Math.random() * _size.y;
            LuftfahrtClasses.crc2.translate(x, y);
            LuftfahrtClasses.crc2.fill(particle);
            LuftfahrtClasses.crc2.restore();
        }
        LuftfahrtClasses.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        // steps between Mountains and valley
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(0, 0);
        LuftfahrtClasses.crc2.lineTo(0, -_max);
        //solange zeichnen bis komplette width ausgefüllt ist
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            LuftfahrtClasses.crc2.lineTo(x, y);
        } while (x < LuftfahrtClasses.crc2.canvas.width);
        LuftfahrtClasses.crc2.lineTo(x, 0);
        LuftfahrtClasses.crc2.closePath();
        let gradient = LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
    }
    function drawTrees(horizon) {
        // Anzahl der Bäume festlegen
        const numberOfTrees = 40;
        // Baumparameter festlegen
        const treeHeight = 30;
        const treeColor = "darkgreen";
        const trunkColor = "brown";
        // Zufällige Positionen für die Bäume generieren
        for (let i = 0; i < numberOfTrees; i++) {
            const treeX = Math.random() * LuftfahrtClasses.crc2.canvas.width;
            const treeY = horizon - treeHeight;
            // Baumstamm zeichnen
            LuftfahrtClasses.crc2.fillStyle = trunkColor;
            LuftfahrtClasses.crc2.fillRect(treeX - 5, treeY + treeHeight, 10, -treeHeight * 0.4);
            // Baumkronen zeichnen
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(treeX, treeY);
            LuftfahrtClasses.crc2.lineTo(treeX + 25, treeY + 20);
            LuftfahrtClasses.crc2.lineTo(treeX - 25, treeY + 20);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fillStyle = treeColor;
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(treeX, treeY - 10);
            LuftfahrtClasses.crc2.lineTo(treeX + 20, treeY + 10);
            LuftfahrtClasses.crc2.lineTo(treeX - 20, treeY + 10);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fillStyle = treeColor;
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(treeX, treeY - 20);
            LuftfahrtClasses.crc2.lineTo(treeX + 15, treeY);
            LuftfahrtClasses.crc2.lineTo(treeX - 15, treeY);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fillStyle = treeColor;
            LuftfahrtClasses.crc2.fill();
        }
    }
    function drawKiosk(_position) {
        console.log("kiosk");
        // Farben für  Kiosk festlegen
        let roofColor = "hsl(15,49%,50%)"; //brown
        let windowColor = "#FFFFFF"; // white
        let hutColor = "hsl(15,49%,50%)"; // brown
        // Größe des Kiosks festlegen
        let kioskWidth = 80;
        let kioskHeight = 60;
        LuftfahrtClasses.crc2.save();
        // Dach zeichnen
        LuftfahrtClasses.crc2.fillStyle = roofColor;
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(_position.x, _position.y);
        LuftfahrtClasses.crc2.lineTo(_position.x + kioskWidth / 2, _position.y - kioskHeight / 3);
        LuftfahrtClasses.crc2.lineTo(_position.x + kioskWidth, _position.y);
        LuftfahrtClasses.crc2.closePath();
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
        // Fenster zeichnen
        LuftfahrtClasses.crc2.fillStyle = windowColor;
        LuftfahrtClasses.crc2.fillRect(_position.x, _position.y, kioskWidth, kioskHeight);
        // Hütte zeichnen
        let hutWidth = kioskWidth;
        let hutHeight = kioskHeight / 2;
        let hutX = _position.x + (kioskWidth - hutWidth) / 2;
        let hutY = _position.y + kioskHeight - hutHeight;
        LuftfahrtClasses.crc2.fillStyle = hutColor;
        LuftfahrtClasses.crc2.fillRect(hutX, hutY, hutWidth, hutHeight);
    }
    function drawParaglider(_position) {
        // Farben für den Fallschirmflieger festlegen
        const parachuteColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const bodyColor = "#FFFF00"; // Gelb
        // Größe des Fallschirmflieger festlegen
        const paragliderWidth = 50;
        const paragliderHeight = 50;
        LuftfahrtClasses.crc2.save();
        // Fallschirm zeichnen
        LuftfahrtClasses.crc2.fillStyle = parachuteColor;
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.arc(_position.x, _position.y, paragliderWidth / 2, 0, Math.PI * 2);
        LuftfahrtClasses.crc2.closePath();
        LuftfahrtClasses.crc2.fill();
        // Körper zeichnen
        LuftfahrtClasses.crc2.fillStyle = bodyColor;
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(_position.x, _position.y - paragliderHeight / 2);
        LuftfahrtClasses.crc2.lineTo(_position.x - paragliderWidth / 2, _position.y + paragliderHeight / 2);
        LuftfahrtClasses.crc2.lineTo(_position.x + paragliderWidth / 2, _position.y + paragliderHeight / 2);
        LuftfahrtClasses.crc2.closePath();
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
    }
    function drawLandingPlace(_position) {
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.ellipse(_position.x, _position.y, 30, 100, Math.PI / 2, 0, 2 * Math.PI);
        // Ellipse füllen
        LuftfahrtClasses.crc2.fillStyle = "HSLA(111,47%,56%)";
        LuftfahrtClasses.crc2.fill();
    }
    function drawfrontMountain() {
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(-50, 400);
        LuftfahrtClasses.crc2.lineTo(0, 50);
        LuftfahrtClasses.crc2.lineTo(250, 430);
        LuftfahrtClasses.crc2.closePath();
        LuftfahrtClasses.crc2.fillStyle = "hsl(284,5%,53%)";
        LuftfahrtClasses.crc2.fill();
    }
    function drawWindsock(_position) {
        //Stab
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.fillStyle = "black";
        LuftfahrtClasses.crc2.fillRect(_position.x, _position.y, 5, 60);
        LuftfahrtClasses.crc2.closePath();
        //Windsack
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.fillStyle = "#d90000";
        LuftfahrtClasses.crc2.moveTo(_position.x, _position.y);
        LuftfahrtClasses.crc2.lineTo(_position.x, _position.y);
        LuftfahrtClasses.crc2.lineTo(600, 400);
        LuftfahrtClasses.crc2.lineTo(600, 410);
        LuftfahrtClasses.crc2.lineTo(_position.x, 415);
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.closePath();
    }
    ;
    function drawGrass(numGrass) {
        let grassColor = '#00ad0e';
        for (let i = 0; i < numGrass; i++) {
            const x = Math.random() * LuftfahrtClasses.crc2.canvas.width;
            const y = 450 + Math.random() * 20;
            const grassHeight = 50;
            const grassWidth = Math.random() * 2 + 1;
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(x, y);
            LuftfahrtClasses.crc2.lineTo(x + grassWidth, y + grassHeight);
            LuftfahrtClasses.crc2.strokeStyle = grassColor;
            LuftfahrtClasses.crc2.lineWidth = grassWidth;
            LuftfahrtClasses.crc2.stroke();
        }
    }
    /*  function drawInsect(_position: Vector) {
     
        Körper
       let radius: number = 3;
       crc2.beginPath();
       crc2.fillStyle = "red";
       crc2.arc(_position.x, _position.y, radius, 0, Math.PI * 2);
       crc2.fill();
       crc2.closePath();
     
        Beine
       crc2.save();
       crc2.beginPath();
       crc2.strokeStyle = "black";
       crc2.moveTo(_position.x, _position.y + 1);
       crc2.lineTo(_position.x + 3, _position.y + 7);
       crc2.moveTo(_position.x, _position.y);
       crc2.lineTo(_position.x - 3, _position.y + 7);
       crc2.moveTo(_position.x, _position.y);
       crc2.lineTo(_position.x + 1, _position.y + 2);
       crc2.moveTo(_position.x, _position.y);
       crc2.lineTo(_position.x - 1.5, _position.y + 2);
       crc2.stroke();
       crc2.restore();
     }; */
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Main.js.map