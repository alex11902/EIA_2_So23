/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.03.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
namespace Randompoem {

/* Array mit zufallswörtern */ 
let subject: string [] = ["Dobby", "Sauron", "Gargamel", "The Witcher", "Das Spaghettimonster", "Luzifer", "Arthur", "Nemo", "Hermine", "Die Wache"];
let predicate: string [] = ["bekommt", "verliert", "kocht", "tötet", "unterwirft", "trinkt", "trifft", "rettet", "schikaniert", "pickst"];
let object: string [] =  ["die Socke", "den Ring,sie zu knechten", "Schlümpfe", "Monster", "Gott", "Tee", "die Tafelrunde", "Dori", "Ron", "einen Pfeil ins Knie"];

//console.log ("Hello? pls sent help");
//console.log(subjekt, praedikat, objekt);

/* for-schleife*/ 
for (let index: number = subject.length; index >= 1; index--) {
    let poemRandom: string = getVerse (subject, predicate, object);

    console.log(poemRandom); 
    
}

/* get-verse Funktion*/
function getVerse (_subject: string[], _predicate: string[], _object: string[]): string 
{  
    let subjectString: number = Math.floor(Math.random() * _subject.length);
    let predicateString: number = Math.floor(Math.random() * _predicate.length);
    let objectString: number = Math.floor(Math.random() * _object.length);

    //console.log("Liest das jmd?");

    let randomVerse: string = _subject[ subjectString] + " " + _predicate[predicateString] + " " + _object[objectString];
    //console.log(randomVerse);

    _subject.splice(subjectString, 1); _predicate.splice(predicateString, 1); _object.splice(objectString, 1); 

    return randomVerse;
}
}