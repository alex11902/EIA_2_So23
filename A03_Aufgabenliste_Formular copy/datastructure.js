"use strict";
/*
Aufgabe: <L04_Datastructures>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <29.04.2023>
Quellen: <inspiriert von Theresa Hauser>
*/
var copy;
(function (copy) {
    //data from mingi
    async function fetchData() {
        console.log("async");
        let response = await fetch("https://webuser.hs-furtwangen.de/~halmosil/database/?command=find&collection=Task");
        let task = await response.text();
        let data = JSON.parse(task);
        console.log("Hey da funktioniert was!");
        copy.generateTasks(data);
    }
    copy.fetchData = fetchData;
})(copy || (copy = {}));
//# sourceMappingURL=datastructure.js.map