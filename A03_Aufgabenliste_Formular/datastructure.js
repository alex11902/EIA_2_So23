"use strict";
/*
Aufgabe: <L04_Datastructures>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.04.2023>
Quellen: <inspiriert von Theresa Hauser>
*/
var household;
(function (household) {
    async function handleLoad() {
        console.log("async");
        let response = await fetch("data.json");
        let task = await response.text();
        let data = JSON.parse(task);
        household.generateTasks(data);
    }
    household.handleLoad = handleLoad;
})(household || (household = {}));
//# sourceMappingURL=datastructure.js.map