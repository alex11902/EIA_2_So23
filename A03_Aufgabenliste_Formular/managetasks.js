"use strict";
/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <inspiriert von Medin Flaig>
*/
var household;
(function (household) {
    window.addEventListener("load", handleLoad);
    let task = document.querySelector("#task");
    let date = document.querySelector("#date");
    let person = document.querySelector("#name");
    let comment = document.querySelector("#comment");
    function handleLoad() {
        console.log(task);
        /* task.value = "";
        date.value = "";
        person.value = "";
        comment.value =""; */
        let addbutton = document.querySelector("#add");
        //let editbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit");
        let deletebutton = document.querySelector("#delete");
        household.generateTasks();
        addbutton.addEventListener("click", handleButtonadd);
        //editbutton.addEventListener("click",handleButtonedit);
        deletebutton.addEventListener("click", handleButtontrash);
    }
    function handleButtonadd() {
        console.log(task.value);
        household.data.moretasks.push({ task: task.value, date: date.value, person: person.value, comment: comment.value, status: false });
        console.log("add new task");
        household.generateTasks();
    }
    function handleButtonedit() {
        console.log("edit task");
    }
    function handleButtontrash() {
        console.log("delete task");
    }
})(household || (household = {}));
//# sourceMappingURL=managetasks.js.map