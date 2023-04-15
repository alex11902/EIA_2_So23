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
    //* neue Task wird erstellt, bei klick auf den add-Button *//
    function displayTask(_event) {
        //form data auswerten//
        let formData = new FormData(document.forms[0]);
        formData.append("task", "datetime", "person", "comment", "status");
    }
    function handleChange(_event) {
    }
    ;
    function checkedTask() {
    }
    function deleteTask() {
    }
    ;
    function timeUp() {
    }
    ;
})(household || (household = {}));
//# sourceMappingURL=managetasks.js.map