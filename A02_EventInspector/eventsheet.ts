/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

namespace EventInspector {

/* install load listener*/
window.addEventListener("load", handleLoad);

/* install listener on document, body, divs*/
function handleLoad(): void {
    let div0: HTMLElement = <HTMLElement>document.getElementById("div0");
    let div1: HTMLElement = <HTMLElement>document.getElementById("div1");
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
   
 /* install mousemove*/
    document.addEventListener("mousemove", setInfoBox);
/* click*/
    document.addEventListener("click", logInfo);
    document.body.addEventListener("click", logInfo);
    div0.addEventListener("click", logInfo);
    div1.addEventListener("click", logInfo);
/*customEvent */
    button.addEventListener("click", customEvent);
    document.addEventListener("CustomEvent", triggercustomEvent);
/* keyup*/
    document.addEventListener("keyup", logInfo);
    document.body.addEventListener("keyup", logInfo);
    div0.addEventListener("keyup", logInfo);
    div1.addEventListener("keyup", logInfo);
   
}

function setInfoBox(_event: MouseEvent): void {

//console.log(_event.clientX);
//console.log(_event.clientY);

let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");

let posX: number =  _event.clientX ;
let posY: number =  _event.clientY;

span.innerHTML =  "Position X:" + (posX) + " " + "Position Y:" + (posY) + " " + (_event.target); 

let offsetX: number = _event.clientX + 10;
let offsetY: number = _event.clientY + 10;

span.style.left = (offsetX) + "px";
span.style.top = (offsetY) + "px";
}
function logInfo(_event: Event): void {
console.log (_event);
console.log("Current Target:" + _event.currentTarget);
console.log("Target" + _event.target);

}
function customEvent(_event: Event): void {

/* neues Custom-Event wird erzeugt*/
    let event: CustomEvent = new CustomEvent("customEvent");
    let button: HTMLElement = <HTMLElement>document.querySelector("button");
    button.dispatchEvent(event);

    
}
function triggercustomEvent(_event:Event) {
    console.log(_event, "Button clicked"); 
}
}