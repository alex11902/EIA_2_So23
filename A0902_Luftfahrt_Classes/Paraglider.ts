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
         // Farben für den Fallschirmflieger festlegen
      const parachuteColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      const bodyColor = "#FFFF00"; // Gelb
  
      // Größe des Fallschirmflieger festlegen
      const paragliderWidth = 50;
      const paragliderHeight = 50;
  
      crc2.save()
      // Fallschirm zeichnen
      crc2.fillStyle = parachuteColor;
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y, paragliderWidth / 2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
    // Körper zeichnen
      crc2.fillStyle = bodyColor;
      crc2.beginPath();
      crc2.moveTo(this.position.x, this.position.y - paragliderHeight / 2);
      crc2.lineTo(
        this.position.x - paragliderWidth / 2,
        this.position.y + paragliderHeight / 2
      );
      crc2.lineTo(
        this.position.x + paragliderWidth / 2,
        this.position.y + paragliderHeight / 2
      );
      crc2.closePath();
      crc2.fill();
      crc2.restore();
    }
    }
    }
}