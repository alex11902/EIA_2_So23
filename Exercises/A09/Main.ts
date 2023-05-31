namespace A09_Asteroids{
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let asteroids: Asteroid[] = [] ;
    

    function handleLoad(_event:Event):void{
        console.log("Asteroids starting");

        let canvas: HTMLCanvasElement| null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0,0,canvas.width,canvas.height);

        createPaths();
        console.log("Asteroids paths:",asteroidPaths);

        createAsteroids(5);
        //createShip();

       // window.addEventListener("mousedown",loadLaser);
       window.addEventListener("mouseup",shootLaser);
        //window.addEventListener("keypress",handleKeypress);
        //window.addEventListener("mousemove",setHeading);
        
         window.setInterval(update, 20);
    }
    function shootLaser(_event: MouseEvent):void{
        console.log("shoot Laser");
        let hotspot: Vector = new Vector(_event.clientX- crc2.canvas.offsetLeft,_event.clientY- crc2.canvas.offsetTop);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
        breakAsteroid(asteroidHit);

    }
    // wenn asteroid größer als 0.3, dann 2 kleinere Asteroiden
    function breakAsteroid(_asteroid: Asteroid):void{
        if (_asteroid.size >0.3){
            for (let i: number= 0; i < 2; i++){
                let fragment: Asteroid= new Asteroid(_asteroid.size / 2,_asteroid.position);
                fragment.velosity.add(_asteroid.velosity);
                asteroids.push(fragment);
            }

        }
        // Methode sucht getroffenen Asteroid aus Array
        let index:number = asteroids.indexOf(_asteroid);
        asteroids.splice( index= 1);
    }
    function getAsteroidHit(_hotspot: Vector):Asteroid | null{
        for (let asteroid of asteroids){
            if (asteroid.isHit(_hotspot))
            return asteroid;
        }
    return null;

    }
    function createAsteroids(_nAsteroids: number):void{
        for(let i: number=0; i < _nAsteroids;i++){
            let asteroid: Asteroid= new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update():void{
        console.log("update");
        crc2.fillRect(0,0,crc2.canvas.width,crc2.canvas.height);

        for (let asteroid of asteroids){
            asteroid.move(1/50);
            asteroid.draw();
        }
        //ship.draw();
        //handleCollisions();
    }
   
};