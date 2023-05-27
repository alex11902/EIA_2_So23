namespace LuftfahrtClasses {
    export class Paraglider{
    position :Vector;
    velosity: Vector;
    size: number;
    
    constructor(_size: number){
        console.log("Paraglider constructor");
    }
    move(_timeslice: number): void{
        console.log("Paraglider move");
    }
    draw():void{
        console.log("Paraglider draw");
    }
    }
}