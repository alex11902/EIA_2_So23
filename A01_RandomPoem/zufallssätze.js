"use strict";
/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.03.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var Randompoem;
(function (Randompoem) {
    /* Array mit zufallswörtern */
    let subject = ["Dobby", "Sauron", "Gargamel", "The Witcher", "Das Spaghettimonster", "Luzifer", "Arthur", "Nemo", "Hermine", "Die Wache"];
    let predicate = ["bekommt", "verliert", "kocht", "tötet", "unterwirft", "trinkt", "trifft", "rettet", "schikaniert", "pickst"];
    let object = ["die Socke", "den Ring,sie zu knechten", "Schlümpfe", "Monster", "Gott", "Tee", "die Tafelrunde", "Dori", "Ron", "einen Pfeil ins Knie"];
    //console.log ("Hello? pls sent help");
    //console.log(subjekt, praedikat, objekt);
    /* for-schleife*/
    for (let index = subject.length; index >= 1; index--) {
        let poemRandom = getVerse(subject, predicate, object);
        console.log(poemRandom);
    }
    /* get-verse Funktion*/
    function getVerse(_subject, _predicate, _object) {
        let subjectString = Math.floor(Math.random() * _subject.length);
        let predicateString = Math.floor(Math.random() * _predicate.length);
        let objectString = Math.floor(Math.random() * _object.length);
        //console.log("Liest das jmd?");
        let randomVerse = _subject[subjectString] + " " + _predicate[predicateString] + " " + _object[objectString];
        //console.log(randomVerse);
        _subject.splice(subjectString, 1);
        _predicate.splice(predicateString, 1);
        _object.splice(objectString, 1);
        return randomVerse;
    }
})(Randompoem || (Randompoem = {}));
//# sourceMappingURL=zufallss%C3%A4tze.js.map