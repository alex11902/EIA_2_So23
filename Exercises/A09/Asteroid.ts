namespace A09_Asteroids{

export class Asteroid{
position :Vector;
velosity: Vector;
type: number;
size: number;

constructor(_size: number){
    console.log("Asteroid constructor");
}
move(_timeslice: number): void{
    console.log("Asteroid move");
}
draw():void{
    console.log("Asteroid draw");
}
}

}
