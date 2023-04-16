namespace household{
    //definiert von welchen typ die einzelnen Werte haben
    export interface Task {
        task: string;
        date: string;
        person:string;
        comment: string;
        status:boolean;
    }
//aufbau der datensammlung
export interface Data {
    [name: string]: Task[];
    }

export let data: Data = {
moretasks:[       
    { task: "Küche putzen" ,date:" 12-04-2023", person:"David", comment: "Du faule Sau! mach auch mal!", status:false },   
    { task: "Bad " ,date: "10-04-023", person:"Mia", comment: "boden putzen", status:false}
] 
}

}