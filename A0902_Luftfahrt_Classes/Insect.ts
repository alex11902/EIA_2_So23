namespace LuftfahrtClasses {
    export class Insect{
    position :Vector;
    velosity: Vector;
    size: number;
    
    constructor(_size: number){
        console.log("Insect constructor");
        this.position = new Vector(0,0);
        this.velosity = new Vector(0,0);
        this.velosity.random (100,200);

        this.size = _size;
    }
    move(_timeslice: number): void{
        console.log("Insect move");
        let offset
    }




    draw():void{
        console.log("Insect draw");
         // Körper
    let radius: number = 3;
    crc2.beginPath();
    crc2.fillStyle = "red";
    crc2.arc(this._position.x, this._position.y, radius, 0, Math.PI * 2);
    crc2.fill();
    crc2.closePath(); 
  
    // Beine
    crc2.save();
    crc2.translate(this._position.x,this. _position.y);
    crc2.scale(this.size, this.size)
    crc2.beginPath();
    crc2.strokeStyle = "black";
    crc2.moveTo(this._position.x,this. _position.y + 1);
    crc2.lineTo(this._position.x + 3, this._position.y + 7);
    crc2.moveTo(this._position.x, this._position.y);
    crc2.lineTo(this._position.x - 3, this._position.y + 7);
    crc2.moveTo(this._position.x, this._position.y);
    crc2.lineTo(this._position.x + 1,this. _position.y + 2);
    crc2.moveTo(this._position.x,this. _position.y);
    crc2.lineTo(this._position.x - 1.5,this. _position.y + 2);
    crc2.stroke();
    crc2.restore();
  };

    }
    }
