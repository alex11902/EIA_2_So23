"use strict";
/*
Aufgabe: <L09.1_Luftfahrt>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <23.05.2023>
Quellen: <inspired by Marie Eckl, CHATGPT>
*/
var OldMacDonalds;
(function (OldMacDonalds) {
    window.addEventListener("load", handleLoad);
    let cow = new OldMacDonalds.Animal("Cow", "Moses", "Hay", 20, 120, "Mooo");
    console.log(cow);
    let pig = new OldMacDonalds.Animal("Pig", "Napoleon", "Junk", 5, 55, "OINK");
    let chicken = new OldMacDonalds.Animal("Chicken", "Arnold", "Grain", 1, 20, "BOGBOG");
    let cat = new OldMacDonalds.Animal("Cat", "Cat#", "Meat", 8, 35, "MIAAAU");
    let horse = new OldMacDonalds.Animal("Horse", "Boxer", "Grass", 10, 47, "WIIIUUU");
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
        let isOutOfFood = false;
        for (let animal of allAnimals) {
            if (animal.foodstock > 0) {
                animal.portion -= animal.foodstock;
                animal.foodstock = 0;
            }
            else {
                isOutOfFood = true;
            }
        }
        let storageDiv = document.getElementById("Storage");
        storageDiv.innerHTML = `<h3>Food Storage</h3>
          ${allAnimals[0].portion}kg of ${allAnimals[0].food}<br>
          ${allAnimals[1].portion}kg of ${allAnimals[1].food}<br>
          ${allAnimals[2].portion}kg of ${allAnimals[2].food}<br>
          ${allAnimals[3].portion}kg of ${allAnimals[3].food}<br>
          ${allAnimals[4].portion}kg of ${allAnimals[4].food}<br>`;
        if (isOutOfFood) {
            alert("LANDWIRTSCHAFTLICHER GUTSHERREHOF wird zu FARM DER TIERE- GENOSSENSCHAFTSBETRIEB");
            window.location.reload();
        }
    }
})(OldMacDonalds || (OldMacDonalds = {}));
//# sourceMappingURL=farm.js.map