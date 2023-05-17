"use strict";
/*
Aufgabe: <L08.2_Luftfahrt>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <10.05.2023>
Quellen: <https://web-development.github.io/grafik/2dcanvas/>
*/
// Handle-load function
var Luftfahrt;
(function (Luftfahrt) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        let w = 820, h = 490;
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        // Makes pixels smooth
        let ratio = window.devicePixelRatio;
        crc2.scale(ratio, ratio);
        canvas.width = w * ratio;
        canvas.height = h * ratio;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        backgroundgradient();
        drawSun();
        drawMountains();
        drawKiosk();
        drawParaglider();
        drawCloud(50, 50);
        drawCloud(200, 70);
        drawCloud(400, 100);
        drawCloud(600, 70);
        drawLandingPlace();
        drawGrass(70);
    }
    function backgroundgradient() {
        // Farbverlauf definieren
        let gradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#87CEFA"); // Hellblau
        gradient.addColorStop(0.65, "#A9A9A9"); // Grau
        gradient.addColorStop(1, "#00FF7F"); // Grün
        // Farbverlauf auf Canvas zeichnen
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    // Function sun
    function drawSun() {
        // Sonnengröße definieren
        let sunSize = Math.min(canvas.width, canvas.height) * 0.1;
        // Farbverlauf für Sonne definieren
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, sunSize);
        gradient.addColorStop(0, "#ffff33"); // Gelb
        gradient.addColorStop(1, "#ffcc00"); // Orange
        // Sonne zeichnen
        crc2.save();
        crc2.translate(sunSize, sunSize); // Verschieben zur linken oberen Ecke
        crc2.beginPath();
        crc2.arc(700, 25, sunSize, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawMountains() {
        console.log(drawMountains);
        // Farben für Berge festlegen
        let mountainColor = "#808080"; // Grau
        // Anzahl der Berge und ihre Breite definieren
        let numMountains = 5;
        let mountainWidth = canvas.width / numMountains;
        // Höhe und Position der Berge festlegen
        let mountainHeight = 200;
        let mountainY = (canvas.height - mountainHeight) / 2;
        // Berge zeichnen
        for (let i = 0; i < numMountains; i++) {
            let mountainX = i * mountainWidth + mountainWidth / 2;
            crc2.beginPath();
            crc2.moveTo(mountainX - mountainWidth / 2, mountainY + mountainHeight);
            crc2.lineTo(mountainX, mountainY);
            crc2.lineTo(mountainX + mountainWidth / 2, mountainY + mountainHeight);
            crc2.closePath();
            crc2.fillStyle = mountainColor;
            crc2.fill();
        }
    }
    function drawKiosk() {
        // Farben für  Kiosk festlegen
        const roofColor = "#FF0000"; // Rot
        const wallColor = "#FFFFFF"; // Weiß
        const doorColor = "#FFFF00"; // Gelb
        // Position und Größe des Kiosks festlegen
        let kioskX = 680;
        let kioskY = 380;
        let kioskWidth = 100;
        let kioskHeight = 70;
        // Dach zeichnen
        crc2.fillStyle = roofColor;
        crc2.beginPath();
        crc2.moveTo(kioskX, kioskY);
        crc2.lineTo(kioskX + kioskWidth / 2, kioskY - kioskHeight / 2);
        crc2.lineTo(kioskX + kioskWidth, kioskY);
        crc2.closePath();
        crc2.fill();
        // Wände zeichnen
        crc2.fillStyle = wallColor;
        crc2.fillRect(kioskX, kioskY, kioskWidth, kioskHeight);
        // Tür zeichnen
        let doorWidth = kioskWidth / 4;
        let doorHeight = kioskHeight / 2;
        let doorX = kioskX + (kioskWidth - doorWidth) / 2;
        let doorY = kioskY + kioskHeight - doorHeight;
        crc2.fillStyle = doorColor;
        crc2.fillRect(doorX, doorY, doorWidth, doorHeight);
    }
    function drawParaglider() {
        // Farben für den Fallschirmflieger festlegen
        const bodyColor = "#FF0000"; // Rot
        const parachuteColor = "#FFFF00"; // Gelb
        // Position und Größe des Fallschirmfliegers festlegen
        const paragliderX = 250;
        const paragliderY = 200;
        const paragliderWidth = 50;
        const paragliderHeight = 50;
        // Fallschirmflieger zeichnen
        crc2.fillStyle = bodyColor;
        crc2.beginPath();
        crc2.arc(paragliderX, paragliderY, paragliderWidth / 2, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = parachuteColor;
        crc2.beginPath();
        crc2.moveTo(paragliderX, paragliderY - paragliderHeight / 2);
        crc2.lineTo(paragliderX - paragliderWidth / 2, paragliderY + paragliderHeight / 2);
        crc2.lineTo(paragliderX + paragliderWidth / 2, paragliderY + paragliderHeight / 2);
        crc2.closePath();
        crc2.fill();
    }
    function drawCloud(x, y) {
        // Wolke zeichnen
        crc2.beginPath();
        crc2.arc(x + 25, y + 25, 20, 0, 2 * Math.PI);
        crc2.arc(x + 60, y + 25, 30, 0, 2 * Math.PI);
        crc2.arc(x + 95, y + 25, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
    }
    function drawLandingPlace() {
        crc2.beginPath();
        crc2.ellipse(480, 460, 50, 100, Math.PI / 2, 0, 2 * Math.PI);
        // Ellipse füllen
        crc2.fillStyle = "lightgreen";
        crc2.fill();
    }
    function drawGrass(numGrass) {
        const grassColor = '#00ad0e';
        for (let i = 0; i < numGrass; i++) {
            const x = Math.random() * 900;
            const y = 500 + Math.random() * 20;
            const grassHeight = 50;
            const grassWidth = Math.random() * 2 + 1;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + grassWidth, y + grassHeight);
            crc2.strokeStyle = grassColor;
            crc2.lineWidth = grassWidth;
            crc2.stroke();
        }
    }
})(Luftfahrt || (Luftfahrt = {}));
//# sourceMappingURL=createluftfahrtcanvas.js.map