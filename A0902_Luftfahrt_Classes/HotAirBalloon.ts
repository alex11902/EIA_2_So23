namespace LuftfahrtClasses {
    export class HotAirBalloon{
    position :Vector;
    velosity: Vector;
    size: number;
    
    constructor(_size: number){
        console.log("Balloon constructor");
    }
    move(_timeslice: number): void{
        console.log("Balloon move");
    }
    draw():void{
        console.log("Balloon draw");
    }
    }
}