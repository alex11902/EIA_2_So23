/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.03.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
namespace Zufallsgedicht {

/* Array mit zufallswörtern */ 
let subjekt: string [] = ["Dobby", "Sauron", "Gargamel", "The Witcher", "Das Spaghettimonster", "Luzifer", "Arthur", "Nemo", "Hermine", "Die Wache"];
let praedikat: string [] = ["bekommt", "verliert", "kocht", "tötet", "unterwirft", "trinkt", "trifft", "rettet", "schikaniert", "pickst"];
let objekt: string [] =  ["die Socke", "den Ring,sie zu knechten", "Schlümpfe", "Monster", "Gott", "Tee", "die Tafelrunde", "Dori", "Ron", "einen Pfeil ins Knie"];

//console.log ("Hello? pls sent help");
//console.log(subjekt, praedikat, objekt);

/* for-schleife*/ 
for (let index: number = subjekt.length; index >= 1; index--) {
    let poemRandom: string = getVerse (subjekt, praedikat, objekt);

    console.log(poemRandom); 
    
}

/* get-verse Funktion*/
function getVerse (_subjekt: string[], _praedikat: string[], _objekt: string[]): string 
{  
    let subjektString: number = Math.floor(Math.random() * _subjekt.length);
    let praedikatString: number = Math.floor(Math.random() * _praedikat.length);
    let objektString: number = Math.floor(Math.random() * _objekt.length);

    //console.log("Liest das jmd?");

    let randomVerse: string = _subjekt[ subjektString] + " " + _praedikat[praedikatString] + " " + _objekt[objektString];
    //console.log(randomVerse);

    _subjekt.splice(subjektString, 1); _praedikat.splice(praedikatString, 1); _objekt.splice(objektString, 1); 

    return randomVerse;
}
}