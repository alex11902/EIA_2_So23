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
    async function fetchData() {
        console.log("async");
        let response = await fetch("https://larahalmosi.github.io/EIA_2_So23/A03_Aufgabenliste_Formular/data.json");
        let task = await response.text();
        household.data = JSON.parse(task);
        console.log(household.data);
        household.generateTasks();
    }
    household.fetchData = fetchData;
    let formData = new FormData(form);
    let json = {};
    for (let key of formData.keys())
        if (!json[key]) {
            let values = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
        }
    //set query
    let query = new URLSearchParams();
    query.set("collection", "moretasks");
    query.set("data", JSON.stringify(json));
})(household || (household = {}));
//# sourceMappingURL=datastructure.js.map