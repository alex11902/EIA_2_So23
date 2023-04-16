"use strict";
/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var household;
(function (household) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let addbutton = document.querySelector("#add");
        let editbutton = document.querySelector("#edit");
        let deletebutton = document.querySelector("#delete");
        household.generateTasks();
        addbutton.addEventListener("click", handleButtonadd);
        editbutton.addEventListener("click", handleButtonedit);
        deletebutton.addEventListener("click", handleButtontrash);
    }
    function handleButtonadd() {
        console.log("add new task");
    }
    function handleButtonedit() {
        console.log("edit task");
    }
    function handleButtontrash() {
        console.log("delete task");
    }
})(household || (household = {}));
//# sourceMappingURL=managetasks.js.map