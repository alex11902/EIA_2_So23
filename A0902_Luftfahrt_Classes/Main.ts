/*
Aufgabe: <L09.2_Luftfahrt_Classes>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <21.05.2023>
Quellen: <insects and windsock inspired by Marie Eckl>
*/
// Handle-load function
namespace LuftfahrtClasses {
    interface Vector{
      x: number;
      y: number;
  }
  window.addEventListener("load",handleLoad);
  let crc2: CanvasRenderingContext2D;
  let golden: number = 0.62;
  
  function handleLoad(_event:Event):void {
  let canvas: HTMLCanvasElement | null= document.querySelector("canvas");
  if (!canvas)
  return;
  crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")
  
  let horizon: number = crc2.canvas.height * golden;
  console.log("horizon")
      canvas = <HTMLCanvasElement>document.querySelector("canvas");
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
  
      backgroundgradient();
      drawSun({x:700,y:70});
      drawClouds({ x:50, y:125}, {x:150, y:50});
      drawClouds({ x:300, y:100}, {x:150, y:50});
      drawClouds({ x:600, y:125}, {x:150, y:50});
      drawMountains({x:0,  y: horizon}, 75, 200, "grey", "white");
      drawMountains({x:0,  y: horizon}, 50, 150, "grey", "lightgrey");
      drawTrees(horizon);
      drawKiosk({x:680, y:360});
      drawParaglider({x:180, y:70});
      drawParaglider({x:300, y:180});
      drawParaglider({x:400, y:250});
      drawLandingPlace({x:480, y:400});
      drawfrontMountain();
      drawWindsock({ x:550, y: 390 });
      drawGrass(150);
      drawInsect({ x: 600, y: 400 });
      drawInsect({ x: 700, y: 450 });
      drawInsect({ x: 100, y: 400 });
      drawInsect({ x: 200, y: 470 }); 
      drawInsect({ x: 400, y: 450 });
      let insect: Insect = new Insect(1);
            console.log(insect)
      
  }
  
    function backgroundgradient() {
      // Define linear Gradient
      let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
      gradient.addColorStop(0, "lightblue"); // lightblue
      gradient.addColorStop(golden, "HSL(291,2%,77%)"); // grey
      gradient.addColorStop(1,"HSL(100, 80%, 30%)"); // green
  
      // draw gradient
      crc2.fillStyle = gradient;
      crc2.fillRect(0, 0, crc2.canvas.width,crc2.canvas.height);
    }
  
    // Function sun
    function drawSun(_position:Vector): void{
        console.log("sun",_position);
    
        let r1: number = 30;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0,0,r1,0,0,r2);
    
        gradient.addColorStop(0,"HSLA(60,100%,90%,1)");
        gradient.addColorStop(1,"HSLA(60,100%,50%,0)");
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0,0,r2,0,2*Math.PI);
        crc2.fill();
        crc2.restore();
    }
  // Draw Clouds
    function drawClouds(_position:Vector,_size: Vector): void{
      console.log("Cloud",_position,_size);
      let nParticles: number = 20;
      let radiusParticle: number = 40;
      let particle: Path2D = new Path2D();
      let gradient: CanvasGradient = crc2.createRadialGradient(0,0,0,0,0,radiusParticle);
  
      particle.arc(0,0,radiusParticle,0, 2*Math.PI);
      gradient.addColorStop(0,"HSLA(0,100%,100%,0.5");
      gradient.addColorStop(1,"HSLA(0,100%,100%,0");
  
      crc2.save();
      crc2.translate(_position.x,_position.y);
      crc2.fillStyle= gradient;
  
      for(let drawn: number = 0; drawn < nParticles; drawn++){
          crc2.save();
          let x:number = (Math.random() - 0.5)* _size.x;
          let y:number = - Math.random() * _size.y;
          crc2.translate(x,y)
          crc2.fill(particle);
          crc2.restore();
      }
      crc2.restore();
  }
  
  function drawMountains(_position: Vector, _min:number, _max:number, _colorLow: string, _colorHigh: string): void {
    console.log("Mountains");
    // steps between Mountains and valley
    let stepMin: number= 50;
    let stepMax: number= 150;
    let x: number = 0;
    
    crc2.save();
    crc2.translate(_position.x, _position.y);
    
    crc2.beginPath();
    crc2.moveTo(0,0);
    crc2.lineTo(0,-_max);
    //solange zeichnen bis komplette width ausgefüllt ist
    do{
        x += stepMin + Math.random()*(stepMax - stepMin);
        let y: number = -_min - Math.random()* (_max - _min);
    
        crc2.lineTo(x,y);
    } while(x < crc2.canvas.width);
    
    crc2.lineTo(x,0);
    crc2.closePath();
    
    let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, -_max);
    gradient.addColorStop(0, _colorLow);
    gradient.addColorStop(0.7, _colorHigh);
    
    crc2.fillStyle = gradient;
    crc2.fill();
  
    crc2.restore();
    }
  function drawTrees(horizon: number): void {
    // Anzahl der Bäume festlegen
    const numberOfTrees: number = 40;
    
    // Baumparameter festlegen
    const treeHeight: number = 30;
    const treeColor: string = "darkgreen";
    const trunkColor: string = "brown";
  
    // Zufällige Positionen für die Bäume generieren
    for (let i = 0; i < numberOfTrees; i++) {
      const treeX: number = Math.random() * crc2.canvas.width;
      const treeY: number = horizon - treeHeight;
  
      // Baumstamm zeichnen
      crc2.fillStyle = trunkColor;
      crc2.fillRect(treeX - 5, treeY + treeHeight, 10, -treeHeight * 0.4);
  
      // Baumkronen zeichnen
      crc2.beginPath();
      crc2.moveTo(treeX, treeY);
      crc2.lineTo(treeX + 25, treeY + 20);
      crc2.lineTo(treeX - 25, treeY + 20);
      crc2.closePath();
      crc2.fillStyle = treeColor;
      crc2.fill();
  
      crc2.beginPath();
      crc2.moveTo(treeX, treeY - 10);
      crc2.lineTo(treeX + 20, treeY + 10);
      crc2.lineTo(treeX - 20, treeY + 10);
      crc2.closePath();
      crc2.fillStyle = treeColor;
      crc2.fill();
  
      crc2.beginPath();
      crc2.moveTo(treeX, treeY - 20);
      crc2.lineTo(treeX + 15, treeY);
      crc2.lineTo(treeX - 15, treeY);
      crc2.closePath();
      crc2.fillStyle = treeColor;
      crc2.fill();
    }
  
  }
  
    function drawKiosk(_position: Vector) {
      console.log("kiosk")
      // Farben für  Kiosk festlegen
      let roofColor = "hsl(15,49%,50%)"; //brown
      let windowColor = "#FFFFFF"; // white
      let hutColor = "hsl(15,49%,50%)"; // brown
  
      // Größe des Kiosks festlegen
      let kioskWidth = 80;
      let kioskHeight = 60;
      crc2.save()
  
      // Dach zeichnen
      crc2.fillStyle = roofColor;
      crc2.beginPath();
      crc2.moveTo(_position.x, _position.y);
      crc2.lineTo(_position.x + kioskWidth/ 2, _position.y - kioskHeight / 3);
      crc2.lineTo(_position.x + kioskWidth, _position.y);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      // Fenster zeichnen
      crc2.fillStyle = windowColor;
      crc2.fillRect(_position.x, _position.y, kioskWidth, kioskHeight);
  
      // Hütte zeichnen
      let hutWidth = kioskWidth ;
      let hutHeight = kioskHeight / 2;
      let hutX = _position.x + (kioskWidth - hutWidth) / 2;
      let hutY = _position.y + kioskHeight - hutHeight;
  
      crc2.fillStyle = hutColor;
      crc2.fillRect(hutX, hutY, hutWidth, hutHeight);
    }
    function drawParaglider(_position:Vector) {
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
      crc2.arc(_position.x, _position.y, paragliderWidth / 2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
    // Körper zeichnen
      crc2.fillStyle = bodyColor;
      crc2.beginPath();
      crc2.moveTo(_position.x, _position.y - paragliderHeight / 2);
      crc2.lineTo(
        _position.x - paragliderWidth / 2,
        _position.y + paragliderHeight / 2
      );
      crc2.lineTo(
        _position.x + paragliderWidth / 2,
        _position.y + paragliderHeight / 2
      );
      crc2.closePath();
      crc2.fill();
      crc2.restore();
    }
  
    function drawLandingPlace(_position: Vector) {
      crc2.beginPath();
      crc2.ellipse(_position.x, _position.y, 30, 100, Math.PI / 2, 0, 2 * Math.PI);
      // Ellipse füllen
      crc2.fillStyle = "HSLA(111,47%,56%)";
      crc2.fill();
    }
  
    function drawfrontMountain():void{
    
  crc2.beginPath();
  crc2.moveTo(-50, 400); 
  crc2.lineTo(0, 50);
  crc2.lineTo(250, 430);
  crc2.closePath();
  
  crc2.fillStyle = "hsl(284,5%,53%)";
  crc2.fill();
    }
  
   
    function drawWindsock(_position: Vector) {
  
      //Stab
      crc2.beginPath();
      crc2.fillStyle = "black";
      crc2.fillRect(_position.x, _position.y, 5, 60);
      crc2.closePath();
  
      //Windsack
      crc2.beginPath();
      crc2.fillStyle = "#d90000";
      crc2.moveTo(_position.x, _position.y);
      crc2.lineTo(_position.x, _position.y);
      crc2.lineTo(600, 400);
      crc2.lineTo(600, 410);   
      crc2.lineTo(_position.x, 415);    
      crc2.fill();
      crc2.closePath();
  };
  function drawGrass(numGrass:number){
    let grassColor = '#00ad0e';
  
    for (let i = 0; i < numGrass; i++) {
      
      const x = Math.random() * crc2.canvas.width;
      const y = 450+ Math.random() * 20 ;
  
      const grassHeight = 50;
      const grassWidth = Math.random() * 2 + 1;
  
      crc2.beginPath();
      crc2.moveTo(x, y);
      crc2.lineTo(x + grassWidth, y + grassHeight);
      crc2.strokeStyle = grassColor;
      crc2.lineWidth = grassWidth;
      crc2.stroke();
    }
  }
  
  function drawInsect(_position: Vector) {
  
    // Körper
    let radius: number = 3;
    crc2.beginPath();
    crc2.fillStyle = "red";
    crc2.arc(_position.x, _position.y, radius, 0, Math.PI * 2);
    crc2.fill();
    crc2.closePath(); 
  
    // Beine
    crc2.save();
    crc2.beginPath();
    crc2.strokeStyle = "black";
    crc2.moveTo(_position.x, _position.y + 1);
    crc2.lineTo(_position.x + 3, _position.y + 7);
    crc2.moveTo(_position.x, _position.y);
    crc2.lineTo(_position.x - 3, _position.y + 7);
    crc2.moveTo(_position.x, _position.y);
    crc2.lineTo(_position.x + 1, _position.y + 2);
    crc2.moveTo(_position.x, _position.y);
    crc2.lineTo(_position.x - 1.5, _position.y + 2);
    crc2.stroke();
    crc2.restore();
  };
  }
  