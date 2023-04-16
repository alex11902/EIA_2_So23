/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <inspiriert von Medin Flaig>
*/
namespace household{
    window.addEventListener("load", handleLoad);
    let task : HTMLInputElement = <HTMLInputElement> document.querySelector("#task");
    let date : HTMLInputElement = <HTMLInputElement>document.querySelector("#date");
    let person: HTMLInputElement = <HTMLInputElement>document.querySelector("#name");
    let comment: HTMLInputElement = <HTMLInputElement>document.querySelector("#comment");

    function handleLoad():void {
    console.log(task);
    /* task.value = "";
    date.value = "";
    person.value = "";
    comment.value =""; */

    let addbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
    //let editbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit");
    let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#delete");
    generateTasks();
    addbutton.addEventListener("click",handleButtonadd);
    //editbutton.addEventListener("click",handleButtonedit);
    deletebutton.addEventListener("click",handleButtontrash);

}
function handleButtonadd():void{
    console.log(task.value);

    
    data.moretasks.push({ task: task.value, date: date.value, person: person.value, comment: comment.value, status: false});

    console.log("add new task");

    generateTasks();
}
function handleButtonedit():void{
    
    console.log("edit task");
    
}
function handleButtontrash():void{
    
    console.log("delete task");
    
}


}

