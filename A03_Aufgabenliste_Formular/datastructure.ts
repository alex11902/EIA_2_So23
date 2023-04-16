namespace household{
    //definiert von welchen typ die einzelnen Werte haben
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

export let data: Data = {
moretasks:[       
    { task: "Küche putzen" ,datetime:" bis: 12.04 15Uhr", person:"David", comment: "Du faule Sau! mach auch mal!", status:false },   
    { task: "Bad " ,datetime: "bis: 10.04, 11Uhr", person:"Mia", comment: "boden putzen", status:false}
] 
}

}