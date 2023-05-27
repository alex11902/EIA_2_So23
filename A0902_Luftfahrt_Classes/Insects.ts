namespace LuftfahrtClasses {
    export class Insect{
    position :Vector;
    velosity: Vector;
    size: number;
    
    constructor(_size: number){
        console.log("Insect constructor");
    }
    move(_timeslice: number): void{
        console.log("Insect move");
    }
    draw():void{
        console.log("Insect draw");
    }
    }
}