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
    { task: "Küche putzen" ,datetime:" 12-04-2023 15.00", person:"David", comment: "Du faule Sau! mach auch mal!", status:false },   
    { task: "Bad " ,datetime: "10-04-023 18.00", person:"Mia", comment: "boden putzen", status:false}
] 
}

}