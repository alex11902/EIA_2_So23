"use strict";
/*Aufgabe: <L09.1_Luftfahrt>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.05.2023>
Quellen: <insects and windsock inspired by Marie Eckl>
*/
// Handle-load function
var OldMacDonalds;
(function (OldMacDonalds) {
    class Animal {
        animaltype;
        name;
        food;
        foodstock;
        portion;
        noise;
        constructor(_animaltype, _name, _food, _foodstock, _portion, _noise) {
            this.animaltype = _animaltype;
            this.name = _name;
            this.food = _food;
            this.foodstock = _foodstock;
            this.portion = _portion;
            this.noise = _noise;
        }
        singSong() {
            return `<h2>${this.name} the ${this.animaltype}</h2>
            <p>"And on that Farm he had a ${this.animaltype} EIEIO</p>
            <p>With a ${this.noise} ${this.noise} here and a ${this.noise} ${this.noise} there</p>
            <p>The ${this.animaltype} called ${this.name} ate ${this.portion} kg of ${this.food}.</p>`;
        }
    }
    OldMacDonalds.Animal = Animal;
})(OldMacDonalds || (OldMacDonalds = {}));
//# sourceMappingURL=animals.js.map