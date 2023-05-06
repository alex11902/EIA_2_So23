"use strict";
/*
Aufgabe: <L08.1_GenerativeKunst>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <06.05.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
// Handle-load function
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        background();
        randomLines();
        randomSquares();
        randomCircles();
    }
    //Set background-color for canvas
    function background() {
        // Generate random color
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        crc2.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.beginPath();
        crc2.closePath();
        crc2.stroke();
    }
    // Draw Lines
    function randomLines() {
        // Draw random lines
        for (let i = 0; i < 50; i++) {
            // Set random color
            crc2.strokeStyle =
                "rgb(" +
                    Math.floor(Math.random() * 5) +
                    ", " +
                    Math.floor(Math.random() * 123) +
                    ", " +
                    Math.floor(Math.random() * 256) +
                    ")";
            // Set random coordinates
            let startX = Math.random() * crc2.canvas.width;
            let startY = Math.random() * crc2.canvas.height;
            let endX = Math.random() * crc2.canvas.width;
            let endY = Math.random() * crc2.canvas.height;
            // Draw line
            crc2.beginPath();
            crc2.moveTo(startX, startY);
            crc2.lineTo(endX, endY);
            crc2.stroke();
        }
    }
    // Draw Squares
    function randomSquares() {
        for (let i = 0; i < 20; i++) {
            // Set random color
            crc2.fillStyle =
                "rgb(" +
                    Math.floor(Math.random() * 256) +
                    ", " +
                    Math.floor(Math.random() * 256) +
                    ", " +
                    Math.floor(Math.random() * 256) +
                    ")";
            // Set random coordinates and size
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            let size = Math.random() * 50;
            // Draw square
            crc2.fillRect(x, y, size, size);
        }
    }
    //  Draw circles
    function randomCircles() {
        for (let i = 0; i < 100; i++) {
            // Set random color
            crc2.fillStyle =
                "rgb(" +
                    Math.floor(Math.random() * 256) +
                    ", " +
                    Math.floor(Math.random() * 256) +
                    ", " +
                    Math.floor(Math.random() * 256) +
                    ")";
            // Set random coordinates and size
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            let radius = Math.random() * 10;
            // Draw circle
            crc2.beginPath();
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=createcanvas.js.map