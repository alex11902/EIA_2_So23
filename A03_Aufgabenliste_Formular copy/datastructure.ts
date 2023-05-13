/*
Aufgabe: <L04_Datastructures>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <29.04.2023>
Quellen: <inspiriert von Theresa Hauser>
*/
namespace copy{
    //definiert von welchen typ die einzelnen Werte haben
    export let data: Data  
export interface Task {
    task: string;
    datetime: string;
    person:string;
    comment: string;
    status:boolean;
}
//aufbau der datensammlung
export interface Data {
[name: string]: Task[];
}
//data from mingi
export async function fetchData(): Promise<void> {
    console.log("async");
    
    let response: Response = await fetch("https://webuser.hs-furtwangen.de/~halmosil/database/?command=find&collection=Task");
    let task: string = await response.text();
    let data = JSON.parse(task);
     console.log("Hey da funktioniert was!")
    generateTasks(data);
   

}
}
  


 
