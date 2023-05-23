"use strict";
/*
Aufgabe: <L09.1_Luftfahrt>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <23.05.2023>
Quellen: <inspired by Marie Eckl>
*/
var OldMacDonalds;
(function (OldMacDonalds) {
    window.addEventListener("load", handleLoad);
    let cow = new OldMacDonalds.Animal("Cow", "Magda", "Grass", 120, 40, "Mooo");
    console.log(cow);
    let pig = new OldMacDonalds.Animal("Pig", "Edgar", "Junk", 95, 20, "OINK");
    let chicken = new OldMacDonalds.Animal("Chicken", "Arnold", "Grain", 50, 10, "BOGBOG");
    let cat = new OldMacDonalds.Animal("Cat", "Karl", "Meat", 65, 8, "MIAAAU");
    let horse = new OldMacDonalds.Animal("Horse", "Carla", "Grass", 65, 8, "WIIIUUU");
    let allAnimals = [cow, pig, chicken, cat, horse];
    function handleLoad(_event) {
        singSong();
        document.getElementById("daysimulation")?.addEventListener("click", newDay);
    }
    function singSong() {
        for (let animal of allAnimals) {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = animal.singSong();
            let textarea = document.getElementById("lyrics");
            textarea.appendChild(paragraph);
        }
        ;
        newDay();
    }
    ;
    function newDay() {
        for (let animal of allAnimals) {
            animal.portion -= animal.foodstock;
        }
        let storageDiv = document.getElementById("Storage");
        storageDiv.innerHTML = `<h3>Food Storage</h3>
        ${allAnimals[0].portion}kg of ${allAnimals[0].foodstock}<br>
        ${allAnimals[1].portion}kg of ${allAnimals[1].foodstock}<br>
        ${allAnimals[2].portion}kg of ${allAnimals[2].foodstock}<br>
        ${allAnimals[3].portion}kg of ${allAnimals[3].foodstock}<br>
        ${allAnimals[4].portion}kg of ${allAnimals[4].foodstock}<br>`;
        if (allAnimals[0].foodstock <= 0) {
            alert: (" LANDWIRTSCHAFTLICHER GUTSHERREHOF wird zu FARM DER TIERE- GENOSSENSCHAFTSBETRIEB");
            window.location.reload();
        }
    }
})(OldMacDonalds || (OldMacDonalds = {}));
//# sourceMappingURL=farm.js.map