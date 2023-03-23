"use strict";
/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.03.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var Zufallsgedicht;
(function (Zufallsgedicht) {
    /* Array mit zufallswörtern */
    let subjekt = ["Dobby", "Sauron", "Gargamel", "The Witcher", "Das Spaghettimonster", "Luzifer", "Arthur", "Nemo", "Hermine", "Die Wache"];
    let praedikat = ["bekommt", "verliert", "kocht", "tötet", "unterwirft", "trinkt", "trifft", "rettet", "schikaniert", "pickst"];
    let objekt = ["die Socke", "den Ring,sie zu knechten", "Schlümpfe", "Monster", "Gott", "Tee", "die Tafelrunde", "Dori", "Ron", "einen Pfeil ins Knie"];
    //console.log ("Hello? pls sent help");
    //console.log(subjekt, praedikat, objekt);
    /* for-schleife*/
    for (let index = subjekt.length; index >= 1; index--) {
        let poemRandom = getVerse(subjekt, praedikat, objekt);
        console.log(poemRandom);
    }
    /* get-verse Funktion*/
    function getVerse(_subjekt, _praedikat, _objekt) {
        let subjektString = Math.floor(Math.random() * _subjekt.length);
        let praedikatString = Math.floor(Math.random() * _praedikat.length);
        let objektString = Math.floor(Math.random() * _objekt.length);
        //console.log("Liest das jmd?");
        let randomVerse = _subjekt[subjektString] + " " + _praedikat[praedikatString] + " " + _objekt[objektString];
        //console.log(randomVerse);
        _subjekt.splice(subjektString, 1);
        _praedikat.splice(praedikatString, 1);
        _objekt.splice(objektString, 1);
        return randomVerse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=zufallss%C3%A4tze.js.map