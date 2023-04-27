/*
Aufgabe: <L04_Datastructures>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.04.2023>
Quellen: <inspiriert von Theresa Hauser>
*/
namespace household{
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

export async function fetchData(): Promise<void> {
    console.log("async");
    
    let response: Response = await fetch("https://larahalmosi.github.io/EIA_2_So23/A03_Aufgabenliste_Formular/data.json");
    let task: string = await response.text();
    data = JSON.parse(task);
     console.log(data)
    generateTasks();
   

}
}