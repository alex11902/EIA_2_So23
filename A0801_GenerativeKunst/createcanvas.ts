/*
Aufgabe: <L08.1_GenerativeKunst>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <06.05.2023>
Quellen: <https://web-development.github.io/grafik/2dcanvas/>
*/
// Handle-load function

namespace Canvas {
  window.addEventListener("load", handleLoad);

  let canvas: HTMLCanvasElement;
  let crc2: CanvasRenderingContext2D;

  function handleLoad(): void {
    const w = 770,
      h = 480;

    canvas = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    // Makes pixels smooth
    let ratio = window.devicePixelRatio;
    crc2.scale(ratio, ratio);

    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    background();
    randomLines();
    randomSquares();
    randomCircles();
    drawImages();
  }
  //Set background-color for canvas

  function background(): void {
    // Generate random color
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    crc2.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.closePath();
    crc2.stroke();
  }
  // Draw Lines

  function randomLines(): void {
    // Draw random lines
    for (let i = 0; i < 50; i++) {
      // Set random color
      crc2.strokeStyle =
        "rgb(" +
        Math.floor(Math.random() * 5) +
        ", " +
        Math.floor(Math.random() * 123) +
        ", " +
        Math.floor(Math.random() * 256) +
        ")";

      // Set random coordinates
      let startX = Math.random() * crc2.canvas.width;
      let startY = Math.random() * crc2.canvas.height;
      let endX = Math.random() * crc2.canvas.width;
      let endY = Math.random() * crc2.canvas.height;

      // Draw line
      crc2.beginPath();
      crc2.moveTo(startX, startY);
      crc2.lineTo(endX, endY);
      crc2.stroke();
    }
  }
  // Draw Squares

  function randomSquares(): void {
    for (let i = 0; i < 20; i++) {
      // Set random color
      crc2.fillStyle =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ")";

      // Set random coordinates and size
      let x = Math.random() * crc2.canvas.width;
      let y = Math.random() * crc2.canvas.height;
      let size = Math.random() * 50;

      // Draw square
      crc2.fillRect(x, y, size, size);
    }
  }
  //  Draw circles

  function randomCircles(): void {
    for (let i = 0; i < 100; i++) {
      // Set random color
      crc2.fillStyle =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ")";

      // Set random coordinates and size
      let x = Math.random() * crc2.canvas.width;
      let y = Math.random() * crc2.canvas.height;
      let radius = Math.random() * 10;

      // Draw circle
      crc2.beginPath();
      crc2.arc(x, y, radius, 0, 2 * Math.PI);
      crc2.fill();
    }
  }
  // Array mit den Bild-URLs von Schaf Dolly
let imageUrls = [
  "https://cloudfront-eu-central-1.images.arcpublishing.com/madsack/UUNTCG4ROZDMJOUKMHR5PUTUII.jpeg",
  "https://www.animalresearch.info/files/7414/0742/1258/1996_1.jpg",
  "https://media1.faz.net/ppmedia/video/2218347658/1.106625/default-retina/professor-ian-wilmut-mit-der.jpg"
];
function drawImages() {
// Load images
function loadImage(url:any) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });
}

// Draw images on canvas
async function drawImage(image:any, x:number, y:number) {
  crc2.drawImage(image, x, y, Math.random()*200, Math.random()*200);
}
 // Load images
 Promise.all(imageUrls.map(loadImage))
 .then((images) => {
   // Duplicate and randomize picture
   for (let i = 0; i < Math.random() * 47; i++) {
     images.forEach((image) => {
       drawImage(image,  Math.random() * canvas.width,  canvas.height * Math.random());
     });
   }
 })
 .catch((error) => console.error(error));
}
}


