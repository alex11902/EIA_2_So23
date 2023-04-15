/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
namespace household{
    window.addEventListener("load", handleLoad);

    
function handleLoad():void {
    let addbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
    let editbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit");
    let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#delete");
    addbutton.addEventListener("click",handleButtonadd);
    editbutton.addEventListener("click",handleButtonedit);
    deletebutton.addEventListener("click",handleButtontrash);

}
function handleButtonadd():void{
    
    console.log("add new task");
    
}
function handleButtonedit():void{
    
    console.log("edit task");
    
}
function handleButtontrash():void{
    
    console.log("delete task");
    
}
//* neue Task wird erstellt, bei klick auf den add-Button *//
function displayTask(_event:Event) {
  //form data auswerten//
  let formData = new FormData(document.forms[0]);
  formData.append("task", "datetime", "person", "comment", "status")
  
  
}

function handleChange(_event:Event){

};
function checkedTask():void{
    
}
function deleteTask():void {
    
};
function timeUp():void {
    
};

}

